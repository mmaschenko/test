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

export default class Assigment extends Component {

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

  render() {
    return (
      <View style={style.container}>
        <Header title="Account" blue={true} />
        <View style={style.main_block}>
          <Text>Search</Text>
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
    color: COLORS.grey1
  },
  icon: {
    alignSelf: 'flex-end'
  },
  premium_button: {
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
  }
});
