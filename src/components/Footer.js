// @flow


/* REACT */
import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

/* MODULES */
import * as Animatable from 'react-native-animatable';

/* CUSTOM MODULES */
// import expensesRouterStore from '../../containers/expenses_tab/expenses_router/expenses_router_store.js';

import COLORS from '../config/colors.config';
import FooterItem from './FooterItem';

type _t_props = {
  navigationState: { index: number },
  jumpToIndex: (index: number) => void
}


export default class Footer extends Component {

  // ================
  // ===== FLOW =====
  // ================


  props: _t_props;


  state: {
    activeTab: number,
    isKeyboardVisible: boolean
  };


  keyboardDidShowListener: { remove: () => void };
  keyboardDidHideListener: { remove: () => void };


  // ===========================
  // ===== CLASS FUNCTIONS =====
  // ===========================


  constructor(props: _t_props): void {
    super(props);

    this.state = {
      activeTab: props.navigationState ? props.navigationState.index : 1,
      isKeyboardVisible: false
    };

    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }


  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }


  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }


  componentWillReceiveProps(nextProps: _t_props): void {
    if (nextProps.navigationState) {
      const { index } = nextProps.navigationState;
      this.setState({ activeTab: index });
    }
  }


  // ============================
  // ===== CUSTOM FUNCTIONS =====
  // ============================


  /**
   * Keyboard show handler
   */
  _keyboardDidShow(): void {
    this.setState({ isKeyboardVisible: true });
  }


  /**
   * Keyboard hide handler
   */
  _keyboardDidHide(): void {
    this.setState({ isKeyboardVisible: false });
  }


  /**
   * Navigate to selected tab
   *
   * @param {number} index - index of selected tab
   */
  _navigate(index: number): void {
    const { index: _currentIndex } = this.props.navigationState;

    /**
     * If click on the same tab - reset nested navigator to default route
     */
    // if (_currentIndex === index) {
    //     if (index === 1) {
    //             type: "Navigation/CUSTOMRESET"
    //         });

    //         expensesRouterStore.dispatch({
    //         });
    //     }
    // }

    this.props.jumpToIndex(index);
  }


  // ==================
  // ===== RENDER =====
  // ==================


  render() {
    /**
     * If keyboard is shown - don't show footer above it
     */
    if (this.state.isKeyboardVisible) {
      return null;
    }

    const footerItemList = [{
      iconClass: "globe"
    }, {
        iconClass: "search"
    }, {
        iconClass: "video-camera"
    }, {
        iconClass: "cog"
    }];

    return (
      <Animatable.View
        style={styles.footer}
        animation="flipInX"
        duration={300}
      >
        {
          footerItemList.map((footerItem, i) => {
            let isActive = i === this.state.activeTab;

            return (
              <TouchableOpacity
                key={i}
                style={styles.tabItem}
                onPress={this._navigate.bind(this, i)}
              >
                <FooterItem
                  isActive={isActive}
                  title={footerItem.title}
                  iconClass={footerItem.iconClass}
                />
              </TouchableOpacity>
            );
          })
        }
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    height: 50
  }
});
