 import React, { Component } from 'react';
 import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
// import { observable } from 'mobx';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';
import COLORS from '../../config/colors.config';
import StreamListItem from './components/StreamItem'

export default class LearningArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id:1, 
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id: 2,
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id:3, 
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id: 4,
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id:5, 
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id: 6,
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id:7, 
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        },
        {
          id:8,
          title: 'PicartoTVRyuu',
          description: 'video title',
          view_count: 230,
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/74/ca/ff/74caff4d-0657-a9c6-7b62-dc9aba39cb93/source/256x256bb.jpg' 
        }
       ]
    }
  }

  returnToEventsList = () => {
    return {
      layout: 'icon',
      icon: <Icon name="user-circle-o" size={20} color="white" />,
      onPress: () => this.props.navigation.goBack()
    };
  }

  goSettings = () => {
    return {
      layout: 'icon',
      icon: <Icon name="sliders" size={20} color="white" />,
      onPress: () => this.props.navigation.goBack()
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Header 
          title="Explore"
          blue={true}
          leftItem={this.returnToEventsList()}
          rightItem={this.goSettings()}/>
        <FlatList
          style={style.list}
          keyExtractor={item => item.id}
          data={this.state.list}
          renderItem={({ item }) => <StreamListItem {...item} onPress={this._specificPractice} />}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main_black,
    flex: 1,
  },
  list: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});
