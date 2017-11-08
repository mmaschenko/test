// @flow

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// import { inject } from 'mobx-react';

import Home from './src/navigator/HomeTabs.js'

// import { create, persist } from 'mobx-persist';

//TODO persist store with logged info


export default class Router extends Component {

    _initRouter = (): React.Element<*> => {
    const { authStore } = this.props;

    const stackNavigatorConfig = {
        initialRouteName:  'Home',
        headerMode: 'none'
    };

    const MainRouter = StackNavigator({
        Home
    }, stackNavigatorConfig);

    return <MainRouter />;
}

render() {
    return this._initRouter();
}
}
