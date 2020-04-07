import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
//Text Input Source: https://reactnative.dev/docs/textinput.html

export default function Login ()  {
  const [value, onChangeText] = React.useState('Placeholder');
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
                <Text style={styles.LogoText}> Z </Text>
                {/* <Image 
                    source={require('../images/zlogo.png')}
                /> */}
                <Text style={styles.TitleText}>Zymtom</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TextInput style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              <TextInput style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}>
                  <Text style={styles.SignInText}> SIGN IN </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                  <Text style={styles.ForgotPassText}> Forgot Password? </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Link}>
              <TouchableOpacity>
                <Image
                source={require('../images/links.png')}
                //Image Style
                />
              </TouchableOpacity>
              <Text style={styles.EndText}> Don't have an account? Sign Up</Text>
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
    LogoText: { 
      backgroundColor: '#FFFFFF',  //#FF5F7A
      height: 75,
      width: 75,
      borderRadius: 25,
      color: '#FF3954',
      fontSize: 50,
      fontFamily: 'poppins-bold',
      textAlign: 'center',
    },
    TitleText: {
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'poppins-semibold',
      },
    buttonsContainer: {
      flex: 1,
      marginTop: 10,
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
    Link: {
      flex: 1,
      marginTop: 25,
      alignItems: 'center'
    },
    EndText: {
      color: '#FFFFFF',
      justifyContent: 'center',
      marginTop: 125,
      fontFamily: 'poppins-regular'
    },
});
