// @flow

import { StackNavigator } from 'react-navigation';

import Settings from '../containers/Main/Settings';
import AccountSettings from '../containers/Settings/Account';
// import GeneralPractice from '../containers/Main/Practice/GeneralPractice';

//TODO check if user logged already and redirect to Home

const stackNavigatorConfig = {
  initialRouteName: 'Settings',
  headerMode: 'none'
};

export default StackNavigator({
  Settings: {
    screen: Settings,
  },
  AccountSettings: {
    screen: AccountSettings,
  },
  // GeneralPractice: {
  //   screen: GeneralPractice,
  // },
}, stackNavigatorConfig);
