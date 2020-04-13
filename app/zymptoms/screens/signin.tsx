import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
//Text Input Source: https://reactnative.dev/docs/textinput.html
import { Base64 } from 'js-base64';


interface AppState {
  navigation  : any;
}

interface AppProps {
  email : any;
  password: any;
}

export default class SignIn extends React.Component <AppState, AppProps>  {
  
  constructor(props: any) {
    super(props);
    this.state = {
        email: '',
        password: '',
      }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    switch(event.target.name) {
        case 'email':
            this.setState({ email: event.target.value });
            break;
        case 'password':
            this.setState({ password: event.target.value });
            break;
        default:
            break;
    }
}

  handleSubmit(event: any) {
      event.preventDefault();
      fetch('https://zymptoms.herokuapp.com/api/v1/get_auth_token', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:8000',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              'Authorization': 'Basic ' + Base64.encode(this.state.email + ":" +  this.state.password)
          }})
          .then((response) => {
              if (!response.ok) throw Error(response.statusText);
              return response.json();
          })
          .then((data) => {
              localStorage.setItem('token', data['token']);
              // window.location.href = 'Dashboard'
              this.props.navigation.navigate('Password')
          })
          .catch((error) => console.log(error));
  }

  render () {
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
                <TextInput placeholder="Email" style={styles.textInput} 
                value={this.state.email ? this.state.email : null} onChange={this.handleChange}></TextInput>
              </View>
              <View style={styles.textContainer}>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} 
                value={this.state.password ? this.state.password : null} onChange={this.handleChange}></TextInput>
              </View>

              <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Dashboard')}>
              {/* onPress={() => this.handleSubmit}> */}
                  <Text style={styles.SignInText}> Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Password')}>
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
                onPress={() => this.props.navigation.navigate('Explanation')}>
                  <Text style={styles.endLink}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  };
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    error: {
      borderColor: 'red'
    },
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
      color: '#000000',
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
