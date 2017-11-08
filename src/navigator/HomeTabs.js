// @flow

import { TabNavigator } from 'react-navigation';

import Learn from '../containers/Main/Main';
import Settings from './SettingsTabs';
import Assigment from '../containers/Main/Assigment';
import Search from '../containers/Main/Search';
// import Profile from '../containers/Main/Profile';
import Footer from '../components/Footer';
import COLORS from '../config/colors.config';

const AuthTabs = TabNavigator({
  Learn: {
    screen: Learn,
  },
  Search: {
    screen: Search,
  },
  Assigment: {
    screen: Assigment,
  },
  Settings: {
    screen: Settings,
  },
}, {
    swipeEnabled: true,
    initialRouteName: 'Learn',
    tabBarPosition: 'bottom',
    tabBarComponent: Footer,
    tabBarOptions: {
      activeTintColor: COLORS.grey3,
      tabs: [
        {
          label: 'Learn',
          // route: 'Signin'
        },
        {
          label: 'Search',
          // route: 'Signup'
        },
        {
          label: 'Assigment',
          // route: 'Signup'
        },
        {
          label: 'Settings',
          // route: 'Signup'
        },
      ]
    },
  });

export default {
  screen: AuthTabs,
  navigationOptions: {
    header: null
  }
};