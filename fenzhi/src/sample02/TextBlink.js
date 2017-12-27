/**
* sample for react native state
 */


import React from 'react';
import {
  Text, View
}
from 'react-native'



export default class TextBlink extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      showText :true
    }

    var taskToDo = () => {
      this.setState((aaa) => {
        return {
          showText:!aaa.showText,
        }
      });
    };

    setInterval(taskToDo, 1000);


  }

  render (){

    let abc=this.state.showText ? `
      abcdefgabcdefgabcdefgabcdefgabcdefgabcdefg`: ``;
    return (
        <Text>{abc}</Text>
    )
  }

}
