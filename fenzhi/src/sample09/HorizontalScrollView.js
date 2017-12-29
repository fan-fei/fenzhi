/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions
}
from 'react-native';

export default class HorizontalScrollView extends Component {


  render() {
    let screenWidth=Dimensions.get('window').width;
    return (
      < ScrollView
        keyboardDismissMode='on-drag'
        horizontal={true}
        pagingEnabled={true}
        showHorizontalIndicator={true}
      >
        <View style={
          {
            width:screenWidth,
            flex:1,
            backgroundColor: 'red',
            justifyContent:'center',
            alignItems:'center'
          }
        }
          >
          <Text style={{}}>
            Screen 1</Text>
        </View>

        <View style={
          {
            width:screenWidth,
            flex:1,
            backgroundColor: 'blue',
            justifyContent:'center',
            alignItems:'center'
          }
        }
          >
          <Text style={{}}>
            Screen 2</Text>
        </View>

        <View style={
          {
            width:screenWidth,
            flex:1,
            backgroundColor: 'yellow',
            justifyContent:'center',
            alignItems:'center'
          }
        }
          >
          <Text style={{}}>
            Screen 3</Text>
        </View>




      < /ScrollView>


    )
  }
}
