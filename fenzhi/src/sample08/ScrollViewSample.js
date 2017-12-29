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

export default class ScrollViewSample extends Component {


  render() {
    let screenWidth=Dimensions.get('window').width;
    return (
      < ScrollView
        keyboardDismissMode='on-drag'
        maximumZoomScale={2}
        minimumZoomScale={0.5}
        horizontal={false}
      >
        < Image
        source = {require("./test.jpg")}
        style={{width:screenWidth,height:screenWidth*1/2,marginTop: 20}}
        >
        < /Image>

        <Text style={{textAlign: 'center', backgroundColor: 'green',height: 40,fontSize: 20,padding: 10,marginTop: 20}}>this is a picture</Text>

        <TextInput style={{borderWidth: 1,borderColor: 'red',height: 50 ,width: 100,marginTop: 20}}></TextInput>



      < /ScrollView>


    )
  }
}
