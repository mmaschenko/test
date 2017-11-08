// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from '../config/colors.config';

type _t_loaderOverlay = {
  isActive: boolean,
  title: string,
  iconClass: string
};

const FooterItem = (props: _t_loaderOverlay): React.Element<*> => {
  const { isActive, title, iconClass } = props;
  return (
    <View style={isActive && styles.activeFooterItem || styles.footerItem} >
      <Icon name={iconClass} size={32} color={isActive ? COLORS.main_black : COLORS.grey1 }/>
    </View>
  );
};
export default FooterItem;

const styles = StyleSheet.create({
  footerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
    backgroundColor: COLORS.main_grey
  },
  activeFooterItem: {
    opacity: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.main_green
  },
  footerItemTitle: {
    fontSize: 10,
    color: COLORS.main_blue,
    lineHeight: 14,
  },
});
