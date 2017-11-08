 // @flow

 import React, { Component } from 'react';
 import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Header from '../../../components/Header/Header';
import COLORS from '../../../config/colors.config';
import { getSpecificCategoryRequest } from '../../../utils/request/index';
import type { _t_categoryStore } from '../../../stores/CategoryStore';

import Icon from 'react-native-vector-icons/FontAwesome';

type _t_categoryItemProps = {
  created_at: string,
  updated_at: string,
  icon_url: string,
  name: string,
  onPress: Function,
  id: string
};

const CategoryItem = observer((props: _t_categoryItemProps): React.Element<*> => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.id, props.name)}>
      <View style={styles.category_item_content}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </View>
        <Text style={styles.category_item_text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
});


@inject('authStore', 'categoryStore')
@observer
export default class SpecificPractice extends Component {


  static defaultProps: {
    categoryStore: {}
  }

  props: {
    authStore: _t_categoryStore,
    navigation: {
      goBack: () => void,
      navigate: (route: string) => void
    }
  }

  constructor(props: Object) {
    super(props);
  }

  returnToEventsList = () => {
      return {
          layout: 'icon',
          icon: <Icon name="arrow-left" size={25 * 1.2} color="white" />,
          onPress: () => this.props.navigation.goBack()
      };
  }

  _specificPractice = (id: string, name: string, question_categories: Array<Object> ): void => {
    const { navigate } = this.props.navigation;
    //TODO Check if user selected category has subcategories. If so we need to go to specific subcategory


    // if (has_subcatefories) {
    //   navigate('SpecificPractice', {id, name});
    // } else {
    //   //TODO redirect to questions
    // }
  }

  _setSpecificCategory = (selectedCategory: Array<Object>): void => {
    if (selectedCategory) {
      this.props.categoryStore.setValue({
        selectedCategory
      });
    }
  }

  componentDidMount = (): void => {
    const { userToken } = this.props.authStore;
    if (userToken && this.props.navigation.state.params.id) {
      const request = getSpecificCategoryRequest(this.props.navigation.state.params.id, userToken);
      request.then((res: { question_category?: Array<Object> }): void => {
        if (res.question_category) {
          this._setSpecificCategory(res.question_category);
        }
      });
    }
  }

  render = (): React.Element<*> => {
    return (
      <View style={styles.container}>
        <Header leftItem={this.returnToEventsList()} title={this.props.navigation.state.params.name} blue/>
        <View style={styles.question_list}>
        <FlatList
          style={styles.list}
          keyExtractor={(item: { id: string }): string => item.id}
          data={this.props.categoryStore.selectedCategory.question_categories}
          renderItem={({item}) => <CategoryItem {...item} onPress={this._specificPractice}/>}
        />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey6,
    flex: 1,
  },
  question_list: {
    marginTop: 20,
    flexDirection: 'row'
  },
  image_block: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_block: {
    flex: 1
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12.5
  },
  list_item: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 70
  },
  category_item_text: {
    margin: 15
  },
  category_item_content: {
    flex: 1,
    flexDirection: 'row'
  }
});
