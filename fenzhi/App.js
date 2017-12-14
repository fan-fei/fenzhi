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
  View
} from 'react-native';
import MyButton from './src/component/MyButton'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到分治!
        </Text>
        <Text style={styles.instructions}>
          拆解句子结构，实现分而治之！
        </Text>

        <MyButton text="登录" onPressMethod={()=>{alert("你点击了确定")}}></MyButton>
        <MyButton text="注册" onPressMethod={()=>{alert("你点击了注册")}}></MyButton>


      </View>
    );
  }
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
