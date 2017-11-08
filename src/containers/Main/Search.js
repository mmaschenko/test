 import React, { Component } from 'react';
 import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header/Header';
import COLORS from '../../config/colors.config';
import { getCategoriesRequest } from '../../utils/request/index';



//TODO cover with flow types

export default class Search extends Component {


  constructor(props) {
    super(props: Object);
  }


  render = (): React.Element<*> => {
    return (
      <View style={styles.container}>
        <Header title="Search" blue/>
        <Text>Search</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey6,
    flex: 1,
  }
});
