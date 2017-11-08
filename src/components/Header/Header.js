// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  PixelRatio
} from 'react-native';

import styles from "./Styles";

import COLORS from '../../config/colors.config';

export default class CrossPlatformHeader extends Component {

  props: {
    blue?: boolean,
    title: string,
    children?: React.Element<*>,
    rightItemColor: string,
    leftItem?: Object,
    rightItem?: Object,
    foreground?: string,
    style?: Object,
    rightItemColor?: string,
    showStatusBar?: boolean
}

constructor(props: Object) {
  super(props);
}

render() {
  const { leftItem, title, rightItem, foreground, rightItemColor } = this.props;
  const titleColor = rightItemColor ? rightItemColor : foreground === 'dark' ? COLORS.secondary_blue : COLORS.white;
  const itemsColor = rightItemColor ? rightItemColor : foreground === 'dark' ? COLORS.black : COLORS.white;
  const headerStyle = this.props.blue ? styles.blueHeader : styles.header;
  const titleStyle = this.props.blue ? styles.blueHeaderTitle : styles.titleText;
  const statusBarStyle = this.props.blue ? 'light-content' : 'default';
  const content = React.Children.count(this.props.children) === 0
    ?
    <Text style={[titleStyle, { color: titleColor }]}>
      {title}
    </Text>
    :
    this.props.children;
  Platform.OS === 'ios' ? StatusBar.setBarStyle(statusBarStyle) : null;
  return (
    <View style={[headerStyle, this.props.style]}>
      <StatusBar hidden={this.props.showStatusBar} />
      <View style={styles.leftItem}>
        <ItemWrapper color={itemsColor} item={leftItem} />
      </View>
      <View
        accessible={true}
        accessibilityLabel={title}
        accessibilityTraits="header"
        style={[styles.centerItem]}>
        {content}
      </View>

      <View style={styles.rightItem}>
        <ItemWrapper color={itemsColor} item={rightItem} />
      </View>
    </View>
  );
}

}

type _t_itemWrapperProps = {
  color: string,
  item?: Object
};

const ItemWrapper = ((props: _t_itemWrapperProps) => {
  const { item, color } = props;
  if (!item) {
    return null;
  }

  let content;
  const { title, icon, image, layout, onPress } = item;
  const fontSize = PixelRatio.get() <= 2 ? 20 : 25;
  console.log('fontSize', fontSize)
  if (layout !== 'icon' && title) {
    content = (
      <Text style={[styles.itemText, styles.titleWrapper, { color }, { fontSize }]}>
        {title}
      </Text>
    );
  } else if (image) {
    content = <Image source={image} />;
  }
  else if (icon) {
    content = (
      <View style={styles.specificIconWrapper}>
        <Text style={[styles.itemText, { color }]}>
          {icon}
        </Text>
        <Text style={[styles.itemText, styles.iconWrapper, { color }]}>
          {title ? title : null}
        </Text>

      </View>

    );
  }

  return (
    <TouchableOpacity
      accessibilityLabel={title}
      accessibilityTraits="button"
      onPress={onPress}
      style={styles.itemWrapper}>
      {content}
    </TouchableOpacity>
  );

});
