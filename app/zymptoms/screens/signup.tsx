import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

//Text Input: https://reactnative.dev/docs/textinput.html

export default function SignUp ({navigation} : { navigation: any})  {
  return (
    <View style= { styles.container }>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Text style={styles.logoText}> Z </Text>
          </View>
            <Text style={styles.titleText}>Zymptom</Text>
        </View>
        <View style={styles.textContainer}>
          <TextInput style={styles.textInput}>  Email </TextInput>
          <TextInput style={styles.textInput}>  Password </TextInput>
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
            onPress={() => navigation.push('SignIn')}>
              <Text style={styles.endLink}>Sign In!</Text>
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
      flex: height/250,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height/10
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
    textContainer: {
      flex: height/150,
      alignItems: 'center',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      color: '#ADADAD',
      height: height/17.5,
      width: width/1.4,
      borderRadius: height/15,
      margin: height/90,
      fontSize: height/55
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
