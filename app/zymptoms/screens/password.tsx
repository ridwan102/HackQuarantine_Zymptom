import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
//Text Input Source: https://reactnative.dev/docs/textinput.html

export default function Password ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
              <View style={styles.logo}>
                <Text style={styles.logoText}> Z </Text>
              </View>
                <Text style={styles.TitleText}>Zymtom</Text>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.text}>Please enter your email. If you have an account,</Text>
                <Text style={styles.text}>you will shortly receive an email</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}> Email </TextInput>
              <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}>
                  <Text style={styles.SignInText}> Reset Password </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.link}>
                <Text style={styles.endText}>Return to</Text>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.push('Welcome')}>
                  <Text style={styles.endLink}>Welcome Screen</Text>
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
      marginTop: 100
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
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100
      },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-regular',
    },
    inputContainer: {
      flex: 1,
      marginTop: -75,
      alignItems: 'center',
    },
    textInput: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      color: '#ADADAD',
      height: 40,
      width: 300,
      borderRadius: 20,
      margin: 15,
    },
    SignInButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#019CDD',
      height: 40,
      width: 300,
      borderRadius: 20,
      margin: 10
    },
    SignInText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-medium',
      fontSize: 14
    },
    ForgotPassText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-regular',
      fontSize: 12,
      marginTop: 15
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
      fontFamily: 'poppins-regular'
    },
    endLink: {
        color: '#FFFFFF',
        justifyContent: 'center',
        fontFamily: 'poppins-bold',
        marginLeft: 3.5
      },
});
