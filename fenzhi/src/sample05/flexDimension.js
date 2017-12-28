/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity

} from 'react-native';
export default class flexDimension extends Component {
  render() {
    return (
      <View style={{
        height:300,
        backgroundColor:"grey",
        flexDirection : "column",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text style={{height:25, width:30,backgroundColor:"red"}}></Text>
        <Text style={{height:25, width:30,backgroundColor:"blue"}}></Text>
        <Text style={{height:25, width:30,backgroundColor:"cyan"}}></Text>
        <Text style={{height:25, width:30,backgroundColor:"green"}}></Text>
      </View>
    );
  }
}
