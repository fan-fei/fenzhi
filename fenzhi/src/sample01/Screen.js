/**
 * Sample React Native Screen
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
import MyButton from './MyButton'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

import {StackNavigator} from 'react-navigation'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Screen = StackNavigator(
  {
    First :{screen:FirstScreen},
    Second :{screen:SecondScreen}
  }
)

export default Screen;
