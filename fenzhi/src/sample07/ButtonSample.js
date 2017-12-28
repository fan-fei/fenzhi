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
  TextInput,
  View,
  TouchableOpacity,
  Keyboard

} from 'react-native';
import Button from 'react-native-button';

export default class ButtonSample extends Component {
  constructor(props){
    super(props);
    this.state = {
      typedText:"description"
    };
  }

  render() {
    return (

      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
      }}
        >
          <Button
            style={{
              fontSize:25,
              backgroundColor:'green',
              overflow:'hidden',
              padding:15,
              // width:150,
              color:'white',
              borderRadius:20,
              width:150
            }}

            onPress={
              ()=>{
                this.setState(
                  ()=>{
                    return {
                      typedText:'you clicked button'
                    };
                  }
                );
              }
            }

            onMouseUp={
              ()=>{
                this.setState(
                  ()=>{
                    return {
                      typedText:'you  button'
                    };
                  }
                );
              }
            }
            >
            注册
          </Button>
          <Text>{this.state.typedText}</Text>
      </View>





    );
  }
}
