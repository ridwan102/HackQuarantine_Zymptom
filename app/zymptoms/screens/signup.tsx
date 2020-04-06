import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
//Text Input: https://reactnative.dev/docs/textinput.html

export default function SignUp ()  {
  const [value, onChangeText] = React.useState('Placeholder');
  return (
    <View style= { styles.container }>
        <View style={styles.content}>
            <Image 
                source={require('../images/zlogo.png')}
            />
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
            <TextInput style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}>
                <Text style={styles.SignInText}> SIGN UP </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Link}>
            <TouchableOpacity>
            <Image
            source={require('../images/links.png')}
            //Image Style
            />
            </TouchableOpacity>
            <Text style={styles.EndText}> Already have an account? Sign In</Text>
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
    TitleText: {
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 20
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
      margin: 10,
    },
    SignInText: {
      color: '#FFFFFF',
    },
    Link: {
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
    },
    EndText: {
      color: '#FFFFFF',
      justifyContent: 'center',
      marginTop: 25
    },
});
