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
export default class TextInputSample extends Component {
  constructor(props){
    super(props);
    this.state = {
      typedText:"please enter email"
    };
  }

  componentWillMount () {
    this.abc=Keyboard.addListener('keyboardDidShow',
      ()=>{
          this.setState(
              ()=>{
                return {
                  typedText:"keboard is shown"
                }
              }
          );
      }
    );

    this.def=Keyboard.addListener('keyboardDidHide',
      ()=>{
          this.setState(
              ()=>{
                return {
                  typedText:"keboard is hidden"
                }
              }
          );
      }
    );

  }

  componentWillUnmount(){
    this.abc.remove();
    this.def.remove();
  }

  render() {
    return (
      <View>
          <TextInput style={{
            margin:20,
            height:40,
            borderColor:"gray",
            borderWidth:2
          }}
          keyboardType='email-address'
          placeholder='ender the email'
          placeholderTextColor='red'
          onChangeText={
            (text)=>{
              this.setState(
                (abc)=>{
                  return {
                    typedText:text
                  };
                }
              );
            }
          }
          >
          </TextInput>
          <Text>{this.state.typedText}</Text>

          <TextInput style={{
            margin:20,
            height:80,
            borderColor:"gray",
            borderWidth:2
          }}
          keyboardType='email-address'
          placeholder='ender the password'
          placeholderTextColor='red'
          secureTextEntry={true}
          // returnKeyType='done'
          >
          </TextInput>
      </View>
    );
  }
}
