

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';



export default class MyButton extends Component<{}> {



  render() {
    const {text,onPressMethod} = this.props;
    return (
        <TouchableOpacity
          style={styles.btn}
          onPress={()=>{onPressMethod()}}>
          <Text style = {styles.btnText}>{this.props.text}</Text>
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
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
