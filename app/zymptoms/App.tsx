import React from 'react';
//import react in our code.
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './screens/welcome';

export default class App extends React.Component {
  render() {
    const { container, header, content, text } = styles;
    return (
      <View style={container}>
        <View style={content}>
          <Image 
              source={require('./images/logo.png')}
            />
          <Text style={text}>Get rewards for helping combat COVID-19</Text>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.LoginNowStyle} activeOpacity={0.5}>
            <Image
              source={require('./images/whiteButton.png')}
              //Image Style
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}> Login Now </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.LoginNowStyle} activeOpacity={0.5}>
            <Image
              source={require('./images/whiteButton.png')}
              //Image Style
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}> Create an Account </Text>
          </TouchableOpacity>
        </View>
        <View style={header}>
          <Header title="Sign-Up"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1
  },
  text: {
    flex: 1,
    color: '#FFFFFF',
    marginTop: -20
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3954'
  },
  MainContainer: {
    alignItems: 'center',
    backgroundColor: '#FF3954'
  },
  LoginNowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FF3954',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 45,
    width: 150,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#000000',
    marginBottom: 4,
    marginRight: -20,
  },

});
