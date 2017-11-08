// @Flow

import {
  StyleSheet,
  Platform,
} from 'react-native';

import COLORS from '../../config/colors.config';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  toolbarContainer: {
    paddingTop: STATUS_BAR_HEIGHT,
  },
  specificIconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  iconWrapper: {
    marginTop: 10,
    paddingLeft: 6,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 17
  },
  titleWrapper: {
    paddingLeft: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  },
  header: {
    backgroundColor: 'transparent',
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blueHeader: {
    backgroundColor: COLORS.grey2,
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  blueHeaderTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  titleText: {
    color: COLORS.white,
    fontSize: 13 * 1.2,
    textAlign: 'center'
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start'
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end'
  },
  itemWrapper: {
    paddingLeft: 11,
    paddingRight: 11,
  },
  itemText: {
    letterSpacing: 1,
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

