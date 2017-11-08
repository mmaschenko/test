// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
// import { Provider } from 'mobx-react';

import Stack from './router';

// import stores from './stores';

// import { useStrict } from 'mobx';

// useStrict(true);

export default class Navigator extends Component {
  render() {
    return (
        <Stack />
    );
  }
}

AppRegistry.registerComponent('BigInterview', () => Navigator);
