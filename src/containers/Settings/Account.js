import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Header from '../../components/Header/Header';
import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SCREEN_WIDTH = Dimensions.get('window').width;


export default class AccountSettings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Picatrjk',
        email: 'info@japaniac.de',
        password: 'Password123',
        memberStatus: 'Free',
        image: ''
      }
    };
  }

  changeAccountData = (field, value) => {
    this.setState({
      user: Object.assign({}, this.state.user, { [field]: value })
    })
  }

  goBack = () => {
    return {
      layout: 'icon',
      icon: <Icon name="chevron-left" size={25 * 1.2} color="white" />,
      onPress: () => this.props.navigation.goBack()
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Header title="Account" blue={true} leftItem={this.goBack()}/>
        <View style={style.main_block}>
          <View>
            <Image
              style={style.account_image}
              source={{ uri: 'https://i.pinimg.com/736x/4c/06/2e/4c062e81bce6f6ece5e3314a147df766--wildlife-photography-red-fox.jpg' }}
            />
            <Text style={style.image_text}>Update image</Text>
          </View>
          <Text>Assigments</Text>
          <View style={style.field_container}>
            <Text style={style.title}>Account name</Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={{ color: 'white', flex: 1, textAlign: 'right' }}
              onChangeText={(text) => this.changeAccountData('name', text)}
              value={this.state.user.name}
            />
            <Icon
              name='chevron-right'
              size={22}
              color={COLORS.grey1}
              style={style.icon}
            />
          </View>
          <View style={style.field_container}>
            <Text style={style.title}>Email</Text>
            <TextInput
              keyboard='email-address'
              underlineColorAndroid='transparent'
              style={{ color: 'white', flex: 1, textAlign: 'right' }}
              onChangeText={(text) => this.changeAccountData('email', text)}
              value={this.state.user.email}
            />
            <Icon
              name='chevron-right'
              size={22}
              color={COLORS.grey1}
              style={style.icon}
            />
          </View>
          <View style={style.field_container}>
            <Text style={style.title}>Password</Text>
            <TextInput
              secureTextEntry
              underlineColorAndroid='transparent'
              style={{ color: 'white', flex: 1, textAlign: 'right' }}
              onChangeText={(text) => this.changeAccountData('password', text)}
              value={this.state.user.password}
            />
            <Icon
              name='chevron-right'
              size={22}
              color={COLORS.grey1}
              style={style.icon}
            />
          </View>
          <View style={[style.field_container, style.member_block]}>
            <Text style={style.title}>Member Status</Text>
            <Text style={style.status}>{this.state.user.memberStatus}</Text>
          </View>
          <TouchableOpacity style={style.premium_button}>
            <Text style={style.premium_button_text}>Upgrade to premium</Text>
          </TouchableOpacity>
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
    flex: 1
  },
  field_container: {
    flexDirection: 'row',
    margin: 3,
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.transparent,
    borderBottomColor: '#4C4C4C',
    borderBottomWidth: 1,
    margin: 5,
    padding: 5,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    color: COLORS.grey1
  },
  status: {
    flex: 1,
    textAlign: 'right',
    color: COLORS.grey1,
    paddingRight: 20
  },
  icon: {
    alignSelf: 'flex-end'
  },
  premium_button: {
    marginTop: 25,
    backgroundColor: '#E46F01'
  },
  premium_button_text: {
    color: COLORS.white,
    textAlign: 'center',
    padding: 10,
    fontSize: 19,
    fontWeight: '600'
  },
  image_text: {
    color: COLORS.green1,
    textAlign: 'center',
    marginTop: 17,
    fontSize: 16
  },
  account_image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: 'center',
    marginTop: 15
  },
  member_block: {
    marginTop: 70
  }
});
