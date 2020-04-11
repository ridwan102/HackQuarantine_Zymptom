import React, { useState, useEffect } from 'react';
//import react in our code.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import  Welcome  from './screens/welcome';
import Explanation from './screens/explanation';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Password from './screens/password';
import Intro from './screens/intro';
import SymptomsDay1 from './screens/symptomsDay1';
import SeverityDay1 from './screens/severityDay1';
import OtherSymDay1 from './screens/otherSymDay1';
import HealthConditions from './screens/healthConditions';
import OtherHealth from './screens/otherHealth';
import StreakEx from './screens/streakEx';
import KureCoins from './screens/KureCoins';
import DashboardEx from './screens/dashboardEx';
import Exit from './screens/exit';
import Dashboard from './screens/dashboard';
import Symptoms from './screens/symptoms';
import OtherSym from './screens/otherSym';
import Severity from './screens/severity';
import Streak from './screens/streak';
import Map from './screens/map';
import Wallet from './screens/wallet';
import Safety from './screens/safety';
import Account from './screens/account';
import Offers from './screens/offers';

//Button Source: https://aboutreact.com/image-icon-inside-the-react-native-button/
//Another Source: https://blog.expo.io/building-a-react-native-app-using-expo-and-typescript-part-2-778bf6599e3e
//Font Source: https://docs.expo.io/versions/latest/guides/using-custom-fonts/
//Navigation Source: https://reactnavigation.org/docs/navigating/#navigating-to-a-new-screen


let customFonts = {
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
};

const Stack = createStackNavigator();

// const App = () => {
//   const API_KEY = "<YOUR_API_KEY_HERE>";
//   const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

export default class App extends React.Component {

  state={
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render () {
    if (this.state.fontsLoaded){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Explanation" component={Explanation} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="SymptomsDay1" component={SymptomsDay1} />
            <Stack.Screen name="OtherSymDay1" component={OtherSymDay1} />
            <Stack.Screen name="SeverityDay1" component={SeverityDay1} />
            <Stack.Screen name="HealthConditions" component={HealthConditions} />
            <Stack.Screen name="OtherHealth" component={OtherHealth} />
            <Stack.Screen name="StreakEx" component={StreakEx} />
            <Stack.Screen name="KureCoins" component={KureCoins} />
            <Stack.Screen name="DashboardEx" component={DashboardEx} />
            <Stack.Screen name="Exit" component={Exit} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Symptoms" component={Symptoms} />
            <Stack.Screen name="OtherSym" component={OtherSym} />
            <Stack.Screen name="Severity" component={Severity} />
            <Stack.Screen name="Streak" component={Streak} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="Offers" component={Offers} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Safety" component={Safety} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading/>;
    }
  }
}