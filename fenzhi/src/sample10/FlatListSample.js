/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList
}
from 'react-native';

export default class FlatViewSample extends Component {



  render() {

    let data = [
      {
          "key":"1",
          "name":"name1",
          "description":"description1",
          "urlAddress":"http://img0.imgtn.bdimg.com/it/u=3646823212,2542355244&fm=27&gp=0.jpg"
      },
      {
          "key":"2",
          "name":"name2",
          "description":"description2",
          "urlAddress":"http://img0.imgtn.bdimg.com/it/u=3646823212,2542355244&fm=27&gp=0.jpg"
      },
      {
          "key":"3",
          "name":"name3",
          "description":"description3",
          "urlAddress":"http://img0.imgtn.bdimg.com/it/u=3646823212,2542355244&fm=27&gp=0.jpg"
      },
      {
          "key":"4",
          "name":"name4",
          "description":"description4",
          "urlAddress":"http://img0.imgtn.bdimg.com/it/u=3646823212,2542355244&fm=27&gp=0.jpg"
      }
    ];

    return (
      <View style={{flex :1, marginTop: 20}}>
        <View style={{height: 100,backgroundColor: 'black'}}>

        </View>
        <FlatList
          data={data}
          renderItem={(items)=>{
            return (
              <View
                style={{
                  flex:1,
                  flexDirection: 'row',
                  backgroundColor: items.index%2==0?'green':'red'}}
              >

                    <Image
                      style={{width: 100,height: 100, marginTop: 5}}
                      source={require('../sample08/test.jpg')}></Image>


                  <View>
                    <Text style={{padding: 20}}>{items.item.name}</Text>
                    <Text style={{padding: 20}}>{items.item.description}</Text>
                  </View>
            </View>);

          }}>

        </FlatList>
      </View>
    );
  }

}
