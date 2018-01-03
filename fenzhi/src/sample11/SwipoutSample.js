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
  FlatList,
  Alert
}
from 'react-native';
import Swipeout from 'react-native-swipeout';

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
];

export default class SwipoutSample extends Component {




  render() {


    return (
            <View style={{flex :1, marginTop: 20}}>
              <FlatList
                data={data}
                renderItem={(items)=>{


                  const swipeSettings = {
                    autoClose:true,

                    onClose:()=>{
                    },

                    onOpen:()=>{

                    },

                    right:[
                      {
                        onPress: () => {
                          Alert.alert(
                            'Alert',
                            'Are you want to delete this item?',
                            [
                              {text:'NO', onPress:()=>{console.log('no pressed')},style:'cancel'},
                              {text:'YES', onPress:()=>{
                                  data.splice(items.index,1);
                                  // alert(JSON.stringify(data))
                                }
                              }
                            ],
                            {'cancelable':true}

                          );
                        },
                        text:'Delete',
                        type:'delete'
                      }
                    ]
                  };



                  return (

                    <Swipeout   {...swipeSettings} >
                    <View
                      style={{
                        flex:1,
                        flexDirection: 'row',
                        backgroundColor: items.index%2==0?'green':'red'}}>

                          <Image
                            style={{width: 100,height: 100, marginTop: 5}}
                            source={require('../sample08/test.jpg')}></Image>


                        <View>
                          <Text style={{padding: 10}}>{items.index+1}</Text>
                          <Text style={{padding: 10}}>{items.item.name}</Text>
                          <Text style={{padding: 10}}>{items.item.description}</Text></View>
                  </View>
                </Swipeout>
                );


                }}>

              </FlatList>
            </View>

    );
  }

}
