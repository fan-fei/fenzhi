/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { Button, ScrollView, StatusBar,Text } from 'react-native';
 import { StackNavigator, SafeAreaView } from 'react-navigation';
 // import SampleText from './SampleText';

 const MyNavScreen = ({ navigation, banner, book }) => (
   <SafeAreaView>
     {/* <Text>{book}</Text> */}
     {/* <Text>{banner}</Text> */}


     <Button
       onPress={() => navigation.navigate('Profile', { name: 'Jane1' })}
       title="Go to a profile screen"
     />
     <Button
       onPress={() => navigation.navigate('Photos', { name: 'Jane2' })}
       title="Go to a photos screen"
     />
     <Button onPress={() => navigation.goBack(null)} title="Go back" />
     <StatusBar barStyle="default" />
   </SafeAreaView>
 );

 const MyHomeScreen = ({ navigation }) => (
   <MyNavScreen  navigation={navigation} banner="Home Screen" book="this book" />
 );
 MyHomeScreen.navigationOptions = {
   title: 'Welcome',
 };

 const MyPhotosScreen = ({ navigation }) => (
   <MyNavScreen
     banner={`${navigation.state.params.name}'s Photos`}
     navigation={navigation}
   />
 );
 MyPhotosScreen.navigationOptions = {
   title: 'Photos',
 };

 const MyProfileScreen = ({ navigation }) => (
   <MyNavScreen
     banner={`${navigation.state.params.mode === 'edit'
       ? 'Now Editing '
       : ''}${navigation.state.params.name}'s Profile`}
     navigation={navigation}
   />
 );

 MyProfileScreen.navigationOptions = props => {
   const { navigation } = props;
   const { state, setParams } = navigation;
   const { params } = state;
   return {
     headerTitle: `${params.name}'s Profile!`,
     // Render a button on the right side of the header.
     // When pressed switches the screen to edit mode.
     headerRight: (
       <Button
         title={params.mode === 'edit' ? 'Done' : 'Edit'}
         onPress={() =>
           setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
       />
     ),
   };
 };

 const SimpleTabs = StackNavigator({
   Home: {
     screen: MyHomeScreen,
   },
   Profile: {
     path: 'people/:name',
     screen: MyProfileScreen,
   },
   Photos: {
     path: 'photos/:name',
     screen: MyPhotosScreen,
   },
 });

 export default SimpleTabs;
