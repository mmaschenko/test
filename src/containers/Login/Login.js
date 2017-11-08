// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { observer, inject } from 'mobx-react';
import { getProfileRequest, loginRequest } from '../../utils/request/index';
import LoaderOverlay from '../../components/LoaderOverlay';
import RegEx from '../../config/regex.config';
import COLORS from '../../config/colors.config';

import type { _t_authStore } from '../../stores/AuthStore';

type _t_inputProps = {
  autoCapitalize: string,
  onChangeText: (text: string) => void,
  onSubmitEditing: () => void,
  placeholder: string,
  propName: string,
  returnKeyType: string,
  secureTextEntry: boolean,
  store: Object, 	// TODO: add store type
  style: Array<Object>
};

const LoginInput = observer((props: _t_inputProps): React.Element<*> => {
  return (
    <TextInput
      {...props}
      value={props.store[props.propName]}
    />
  );
});

@inject('authStore')
export default class Login extends Component {

  state: {
    invalid_fields: Array<string>,
    login_pressed: boolean,
    showLoader: boolean
  }

  static defaultProps: {
    authStore: {}
  }

  props: {
    authStore: _t_authStore,
    navigation: {
      goBack: () => void,
      navigate: (route: string) => void
    }
  }

  constructor(props: Object) {
    super(props);
    this.state = {
      invalid_fields: [],
      login_pressed: false,
      showLoader: false
    };
  }

  _handleTitleInputSubmit = (): void => {
    //TODO autofocus next field
    // this.refs.password.focus();
  }

    _onLoginInputChange = (email: string): void => {
    this.props.authStore.setValue({ email });
  }

  _onPasswordInputChange = (password: string): void => {
    this.props.authStore.setValue({ password });
  }

  _invalidFieldStyle = (field: string): { backgroundColor: string } | void => {
    if (this.state.login_pressed) {
      return {backgroundColor: this.state.invalid_fields.includes(field) ? COLORS.pink : COLORS.white };
    }
    }

  _validateEmail = (email: string): boolean => {
        return RegEx.email.test(email);
    }


    _validateAllFields = (): number => {

      //Method to validate all fields in form using state
      const {authStore} = this.props;
      const { email } = this.props.authStore;
      const _required_fields = ['email', 'password'];

      let invalid_fields = _required_fields.filter(field => !authStore[field]);

      //Check if user entered valid  email

      if (email && !this._validateEmail(email)) {
        invalid_fields = [...invalid_fields,'email'];
      }

      //use setState to render all inalid fields
      this.setState({invalid_fields});

      //this function also used on to get info if any required field is invalid
      return invalid_fields.length;
    }

  _login = (): void => {
    this.setState({login_pressed: true});
    const { navigate } = this.props.navigation;
    const { password, email } = this.props.authStore;

    if (!this._validateAllFields()) {
      this.setState({showLoader: true});
      const request = loginRequest({email, password});
      request.then((response) => {
        if (response.auth_token) {
          const profile_request = getProfileRequest(response.auth_token);
          profile_request.then((res) => {
            if (res.registered_user) {

              this.props.authStore.setValue({
                userProfile: res,
                isLoggedIn: true,
                userToken: response.auth_token,
              });
              navigate('Home');
            } else {
              this.setState({showLoader: false});
            }
          });
        } else {
          this.setState({showLoader: false});
        }
      });
    }
  }

  render = () : React.Element<*> => {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0 ,y: 0 }}
          contentContainerStyle={styles.contentContainerStyle}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag">
          <View style={[styles.main_block, styles.image_block]}>
            <Text>Image</Text>
          </View>
          <View style={[styles.main_block]}>
            <View style={[styles.main_block]}>
              <LoginInput
                style={[styles.login_input, this._invalidFieldStyle('email')]}
                placeholder="Email address"
                keyboardType="email-address"
                autoCorrect={false}
                onSubmitEditing={this._handleTitleInputSubmit}
                autoCapitalize="none"
                returnKeyType="next"
                onChangeText={this._onLoginInputChange}
                propName={"email"}
                store={this.props.authStore}
              />
              <LoginInput
                ref="password"
                style={[styles.login_input, this._invalidFieldStyle('password')]}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={this._login}
                onChangeText={this._onPasswordInputChange}
                propName={"password"}
                store={this.props.authStore}
              />
              <TouchableOpacity style={styles.login_button} onPress={this._login} >
                <Text style={styles.login_button_text}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.forgot_block]}>
              <Text>Forgot your password?</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <LoaderOverlay showOverlay={this.state.showLoader}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
        flex: 1,
    },
  image_block: {
    justifyContent: 'center',
        alignItems: 'center',
  },
  main_block: {
    flex: 1
  },
  login_input: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 15,
    textAlign: "left",
    borderRadius: 8,
    height: 40 * 1.2,
    fontSize: 14 * 1.2,
    marginBottom: 8,
    alignSelf: 'stretch',
    backgroundColor: COLORS.white
  },
  login_button: {
    height: 40 ,
    margin: 20,
    justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 5,
        borderColor: COLORS.grey,
        borderWidth: 1,
        alignSelf: 'stretch',
        backgroundColor: COLORS.main_blue,
  },
  forgot_block: {
    justifyContent: 'center',
        alignItems: 'center',
  },
  login_button_text: {
    color: COLORS.white,
    fontWeight: '600'
  }
});
