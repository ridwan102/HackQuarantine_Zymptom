import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import  Welcome  from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';
import Intro from './screens/intro';
import Symptoms from './screens/symptoms';
import Severity from './screens/severity';
import Other from './screens/other';
import HealthConditions from './screens/healthConditions';
import Streak from './screens/streak';
import KureCoins from './screens/KureCoins';
import DashBoardEx from './screens/dashboardEx';
import Exit from './screens/exit';

// Button Source: https://aboutreact.com/image-icon-inside-the-react-native-button/
// Another Source: https://blog.expo.io/building-a-react-native-app-using-expo-and-typescript-part-2-778bf6599e3e
//Font Source: https://docs.expo.io/versions/latest/guides/using-custom-fonts/


let customFonts = {
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Other/>
          </View>
        </View>
      );
    } else {
      return <AppLoading/>;
    }
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