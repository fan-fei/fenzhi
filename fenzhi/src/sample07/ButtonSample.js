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
  Keyboard,
  TouchableHighlight

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
                      typedText:'you clicked the button'
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

          <TouchableHighlight><Text style={
            {
              color:'white',
              backgroundColor:'red',
              width:200,
              height:40,
              textAlign:'center',
              padding:10
            }
          }>TouchableHighlight</Text></TouchableHighlight>

          <TouchableOpacity
            activeOpacity={0.5}
            ><Text style={
            {
              color:'white',
              backgroundColor:'green',
              width:200,
              height:40,
              textAlign:'center',
              padding:10
            }
          }>TouchableOpacity</Text></TouchableOpacity>
      </View>





    );
  }
}
