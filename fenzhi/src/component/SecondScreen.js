

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';



export default class SecondScreen extends Component<{}> {

  static navigationOptions = {
    title : '这是第二页',
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={{alignItems: 'center'}}>
        <Text>这是第二个页面！</Text>
        <TouchableOpacity
          style = {{backgroundColor:"red", width:120, height:50, borderRadius:30, overflow:1}}
          onPress={()=>{navigate("First",{})}}>
          <Text style ={{textAlign:"center"}}>去第一页</Text>
        </TouchableOpacity>
      </View>


    );
  }
}
