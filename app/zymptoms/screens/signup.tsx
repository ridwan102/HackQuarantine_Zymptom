import React from 'react';
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

//Text Input: https://reactnative.dev/docs/textinput.html

interface AppState {
  navigation : any ;
}

interface AppProps {
  email : any;
  password : any;
  confirm : any;
}

export default class SignUp extends React.Component <AppState, AppProps>  {

  constructor(props : any) {
    super(props);
    this.state = {
        email: '',
        password: '',
        confirm: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event : any) {
      switch(event.target.name) {
          case 'email':
              this.setState({ email: event.target.value });
              break;
          case 'password':
              this.setState({ password: event.target.value });
              break;
          case 'confirm':
              this.setState({ confirm: event.target.value });
          default:
              break;
      }
  }

  handleSubmit(event : any) {
      event.preventDefault();
      if (this.state.password === this.state.confirm) {
          fetch('https://zymptoms.herokuapp.com/api/v1/create_user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': 'http://localhost:8000',
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                  'Access-Control-Allow-Headers': 'Content-Type'
              },
              body: JSON.stringify({
                  email: this.state.email,
                  password: this.state.password
              })})
              .then((response) => {
                  if (!response.ok) throw Error(response.statusText);
                  return response.json();
              })
              .then((data) => {
                  localStorage.setItem('token', data['token']);
                  // window.location.href = '/dashboard'
                  this.props.navigation.navigate('Intro')
              })
              .catch((error) => 
                {console.log(error)
                });
      }
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
          <View style={styles.textContainer}>
            <View style={styles.textContainer1}>
              <TextInput placeholder="Email" style={styles.textInput}
              value={this.state.email ? this.state.email : null} onChange={this.handleChange}></TextInput>
            </View>
            <View style={styles.textContainer1}>
              <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} 
              value={this.state.password ? this.state.password : null} onChange={this.handleChange} ></TextInput>
            </View>
            <View style={styles.textContainer1}>
              <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.textInput} 
              value={this.state.confirm ? this.state.confirm : null } onChange={this.handleChange}></TextInput>
            </View>
              <TouchableOpacity style={styles.SignInButton} activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Intro')}>
              {/* onPress={() => this.handleSubmit}> */}
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
              onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.endLink}>Sign In!</Text>
              </TouchableOpacity>
          </View>
      </View>
      );
  };
}

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
    textContainer1: {
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
