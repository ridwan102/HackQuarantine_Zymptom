import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './intro';

//Text Input: https://reactnative.dev/docs/textinput.html

export default function SignUp ({navigation} : { navigation: any})  {
  return (
    <View style= { styles.container }>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Text style={styles.logoText}> Z </Text>
          </View>
            <Text style={styles.TitleText}>Zymtom</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TextInput style={styles.textInput}> Email </TextInput>
          <TextInput style={styles.textInput}> Password </TextInput>
          <TextInput style={styles.textInput}> Confirm Password </TextInput>
            <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}
            onPress={() => navigation.push('Intro')}>
                <Text style={styles.SignInText}> Sign Up </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.link}>
              {/* Google, Twitter, and Facebook links below */}
              {/* <TouchableOpacity>
                <Image
                source={require('../images/links.png')}
                //Image Style
                />
              </TouchableOpacity> */}
          <Text style={styles.endText}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.5}
            onPress={() => navigation.push('Login')}>
              <Text style={styles.endLink}>Sign In!</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3954'
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 145
    },
    logo: {
      backgroundColor: '#FFFFFF',  //#FF5F7A
      height: 75,
      width: 75,
      borderRadius: 25,
    },
    logoText: { 
      color: '#FF3954',
      fontSize: 50,
      fontFamily: 'poppins-bold',
      textAlign: 'center',
      marginTop: -3.5
    },
    TitleText: {
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'poppins-semibold',
      },
    buttonsContainer: {
      flex: 2,
      marginTop: 10,
      alignItems: 'center',
    },
    textInput: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      color: '#ADADAD',
      height: 50,
      width: 300,
      borderRadius: 50,
      margin: 15,
    },
    SignInButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#019CDD',
      height: 50,
      width: 300,
      borderRadius: 50,
      margin: 10,
      marginTop: 20
    },
    SignInText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-medium',
      fontSize: 15,
    },
    link: {
      flex: 1,
      marginTop: 25,
      alignItems: 'center',
      flexDirection: 'row'
    },
    endText: {
      color: '#FFFFFF',
      justifyContent: 'center',
      fontFamily: 'poppins-regular',
      fontSize: 14
    },
    endLink: {
      color: '#FFFFFF',
      justifyContent: 'center',
      fontFamily: 'poppins-bold',
      marginLeft: 3.5,
      fontSize: 14
    },
});
