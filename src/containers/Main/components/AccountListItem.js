// @flow

import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio } from "react-native";
import COLORS from '../../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

type _t_learningAreaCard = {
  image?: Object,
  title: string,
  description: string,
  view_count?: number
};
const SCREEN_WIDTH = Dimensions.get('window').width;


export default AccountListItem = (props: _t_learningAreaCard): React.Element<*> => {

  _renderImage = (image) => {
    if (image) {
      return (
        <Image
          source={{ uri: image }}
          style={style.titleImage} />
      );
    } else {
      return null;
    }
  };

  const { title, link, onPress } = props;
  return (
    <TouchableOpacity style={style.container} onPress={() => onPress(link)}>
      <Text style={style.title}>{title}</Text>
      <Icon
        name='chevron-right'
        size={22}
        color={COLORS.grey1}
        style={style.icon}
      />
    </TouchableOpacity>
  );

};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.transparent,
    borderBottomColor: '#4C4C4C',
    borderBottomWidth: 1 / PixelRatio.get(),
    margin: 5,
    padding: 5,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    color: COLORS.grey1
  },
  icon: {
    alignSelf: 'flex-end'
  }
});
