 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Header from '../../components/Header/Header';
import COLORS from '../../config/colors.config';
import SettingsListItem from './components/SettingsListItem'

export default class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account_settings_list: [
        {
          id: 1,
          title: 'Account',
          link: 'AccountSettings'
        },
        {
          id: 2,
          title: 'Livestreaming',
          link: ''
        },
        {
          id: 3,
          title: 'Connections',
          link: ''
        },
        {
          id: 4,
          title: 'Notifications',
          link: ''
        },
        {
          id: 5,
          title: 'Socials',
          link: ''
        },
        {
          id: 6,
          title: 'Help center',
          link: ''
        }
      ],
      general_settings_list: [
        {
          id: 1,
          title: 'Terms of Service',
          link: ''
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: ''
        },
        {
          id: 3,
          title: 'Licenses',
          link: ''
        },
        {
          id: 4,
          title: 'About Picarto',
          link: ''
        }
      ]
    };
  }

  specificSetting = (link) => {
    const { navigate } = this.props.navigation;
    navigate(link)
  }

  render() {
    return (
      <View style={style.container}>
        <Header title="Settings" blue={true} />
        <View style={style.main_block}>
          <Text style={style.header_style}>
            MY ACCOUNT
          </Text>
          <FlatList
            style={style.list}
            keyExtractor={item => item.id}
            data={this.state.account_settings_list}
            renderItem={({ item }) => <SettingsListItem {...item} onPress={this.specificSetting} />}
          />
          <Text style={style.header_style}>
            GENERAL
          </Text>
          <FlatList
            style={style.list}
            keyExtractor={item => item.id}
            data={this.state.general_settings_list}
            renderItem={({ item }) => <SettingsListItem {...item} onPress={this.specificSetting} />}
          />
        </View>
      </View>
    );
  }
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main_black
  },
  main_block: {
    flex: 1,
  },
  login_input: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 15,
    borderColor: COLORS.grey,
    borderWidth: 1,
    textAlign: "left",
    height: 40 * 1.2,
    fontSize: 14 * 1.2,
    marginBottom: 5,
    alignSelf: 'stretch',
  },
  login_button: {
    height: 40 ,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginTop: 5,
    borderColor: COLORS.grey,
    borderWidth: 1,
    alignSelf: 'stretch'
  },
  login_button_block: {
    alignItems: 'flex-end'
  },
  header_style: {
    margin: 10,
    textAlign: 'left',
    color: COLORS.grey3
  }

});
