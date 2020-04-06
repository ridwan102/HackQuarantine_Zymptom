import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import  Welcome  from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';
import Intro from './screens/intro';
import Symptoms from './screens/symptoms';
import Severity from './screens/severity';

// Button Source: https://aboutreact.com/image-icon-inside-the-react-native-button/
// Another Source: https://blog.expo.io/building-a-react-native-app-using-expo-and-typescript-part-2-778bf6599e3e

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Severity/>
        </View>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header : {
    flex: 1
  },

});