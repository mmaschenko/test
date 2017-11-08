// @flow

import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from '../../../config/colors.config';
import Icon from 'react-native-vector-icons/FontAwesome';

type _t_learningAreaCard = {
  image?: Object,
  title: string,
  description: string,
  view_count?: number
};


export default FullCard = (props: _t_learningAreaCard): React.Element<*> => {

  _renderImage = (image) => {
    if (image) {
      return (
        <Image
          source={{ uri: image}}
          style={style.titleImage} />
      );
    } else {
      return null;
    }
  };

  const { image, title, description, view_count } = props;
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.titleContainer}>
        {this._renderImage(image)}
        <View style={style.descriptionContent}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>
          <View style={style.viewCountContainer}>
            <Icon name='user' size={20} color={COLORS.grey1} />
            <Text style={style.viewCountAmount}>
              {view_count}
            </Text>
          </View>
        </View>
        <View style={style.itemControls}>
          <Icon name='exclamation-circle' size={15} color={COLORS.grey1} />
        </View>
      </View>

    </TouchableOpacity>
  );

};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    backgroundColor: COLORS.transparent,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemControls:{
    // flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleImage: {
    height: 70,
    width:100,
    resizeMode: 'contain'
  },
  descriptionContent: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.grey1
  },
  description: {
    marginTop: 8,
    marginBottom: 5,
    fontWeight: '100',
    color: COLORS.grey1
  },
  progress: {
    marginTop: 12
  },
  viewCountContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  viewCountAmount:{
    marginTop: 4,
    color: COLORS.grey1,
    marginLeft: 3
  }

});
