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
import MyButton from './MyButton'
import SecondScreen from './SecondScreen'

import {StackNavigator} from 'react-navigation'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




export default class FirstScreen extends Component<{}> {

  static navigationOptions = {
    title : '这是第一页',
  }

  render() {


    const {navigate} = this.props.navigation;


    var promise = new Promise((resolve, reject) =>{

      var data = fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => response.json())
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.error(error);
        });

      if(true){
        resolve(data);
      }else{
        reject(error);
      }
    });

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
        <MyButton text="post请求" onPressMethod={()=>{promise.then((data)=>{alert (data)},(error)=>{alert (error.message) })}}></MyButton>

        <TouchableOpacity
          style = {styles.btn}
          onPress={()=>{navigate("Second",{})}}>
          <Text style ={{textAlign:"center"}}>第二页</Text>
        </TouchableOpacity>


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
  btn: {
    width:120,
    height:40,
    borderRadius:30,
    overflow:'hidden',
    backgroundColor:'green',
    justifyContent:'center',

  },
  btnText: {
    textAlign :'center',
  },
});
