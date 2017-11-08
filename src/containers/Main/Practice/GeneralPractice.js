// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Header from '../../../components/Header/Header';
import COLORS from '../../../config/colors.config';
import { getSpecificCategoryRequest } from '../../../utils/request/index';

import type { _t_categoryStore } from '../../../stores/CategoryStore';
import Icon from 'react-native-vector-icons/FontAwesome';

@inject('authStore', 'categoryStore')
@observer
export default class SpecificPractice extends Component {

  static defaultProps: {
    categoryStore: {}
  }

  props: {
    authStore: _t_categoryStore,
    navigation: {
      goBack: () => void,
      navigate: (route: string) => void
    }
  }

  constructor(props: Object) {
    super(props);
  }

  returnToEventsList = () => {
    return {
      layout: 'icon',
      icon: <Icon name="arrow-left" size={25 * 1.2} color="white" />,
      onPress: () => this.props.navigation.goBack()
    };
  }

  _setSpecificCategory = (selectedCategory: Object): void => {
    if (selectedCategory) {
      this.props.categoryStore.setValue({
        selectedCategory
      });
    }
  }

  componentDidMount = (): void => {
    const { userToken } = this.props.authStore;
    if (userToken && this.props.navigation.state.params.id) {
      const request = getSpecificCategoryRequest(this.props.navigation.state.params.id, userToken);
      request.then((res) => {
        if (res.question_category) {
          this._setSpecificCategory(res.question_category);
        }
      });
    }
  }

  render = (): React.Element<*> => {
  return (
    <View style={styles.container}>
      <Header leftItem={this.returnToEventsList()} title="General interviews" blue />
      <View style={styles.question_list}>

      </View>
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey6,
    flex: 1,
  },
  question_list: {
    marginTop: 20,
    flexDirection: 'row'
  },
  image_block: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_block: {
    flex: 1
  },
  list_item: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    paddingRight: 20,
    paddingLeft: 20,
  },
});
