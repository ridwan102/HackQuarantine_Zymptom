import React from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
//Text Input Source: https://reactnative.dev/docs/textinput.html

export default function Login ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
              <View style={styles.logo}>
                <Text style={styles.logoText}> Z </Text>
              </View>
                <Text style={styles.titleText}>Zymptom</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <TextInput style={styles.textInput}> Email </TextInput>
              </View>
              <View style={styles.textContainer}>
                <TextInput style={styles.textInput}> Password </TextInput>
              </View>
              <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}
              onPress={() => navigation.push('Dashboard')}>
                  <Text style={styles.SignInText}> Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.push('Password')}>
                  <Text style={styles.ForgotPassText}> Forgot Password? </Text>
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

                <Text style={styles.endText}>Don't have an account?</Text>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.push('Explanation')}>
                  <Text style={styles.endLink}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        flex: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3954'
    },
    content: {
      flex: height/900,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height/9
    },
    logo: {
      backgroundColor: '#FFFFFF',  //#FF5F7A
      height: height/12,
      width: width/6,
      borderRadius: height/40,
      alignItems: 'center'
    },
    logoText: { 
      color: '#FF3954',
      fontSize: height/17,
      fontFamily: 'poppins-bold',
      marginTop: -height/175
    },
    titleText: {
      color: '#FFFFFF',
      marginTop: height/70,
      fontSize: height/45,
      fontFamily: 'poppins-semibold',
    },
    inputContainer: {
      flex: height/900,
      alignItems: 'center',
    },
    textContainer: {
      backgroundColor: '#FFFFFF',
      height: height/17.5,
      width: width/1.4,
      borderRadius: height/15,
      margin: height/90,
      justifyContent: 'center',
    },
    textInput: {
      color: '#ADADAD',
      fontSize: height/55,
      marginLeft: width/25
    },
    SignInButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#019CDD',
      height: height/17.5,
      width: width/1.4,
      borderRadius: height/15,
      margin: height/90,
    },
    SignInText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-medium',
      fontSize: height/55,
    },
    ForgotPassText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-regular',
      fontSize: height/55,
      marginTop: height/60
    },
    link: {
      flex: height/900,
      alignItems: 'center',
      flexDirection: 'row'
    },
    endText: {
      color: '#FFFFFF',
      justifyContent: 'center',
      fontFamily: 'poppins-regular',
      fontSize: height/55
    },
    endLink: {
      color: '#FFFFFF',
      justifyContent: 'center',
      fontFamily: 'poppins-bold',
      marginLeft: width/100,
      fontSize: height/55
    },
});
