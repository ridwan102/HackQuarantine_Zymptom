import React from 'react';
//import react in our code.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

  render () {
    if (this.state.fontsLoaded){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Symptoms" component={Symptoms} />
            <Stack.Screen name="Severity" component={Severity} />
            <Stack.Screen name="Other" component={Other} />
            <Stack.Screen name="HealthConditions" component={HealthConditions} />
            <Stack.Screen name="Streak" component={Streak} />
            <Stack.Screen name="KureCoins" component={KureCoins} />
            <Stack.Screen name="DashBoardEx" component={DashBoardEx} />
            <Stack.Screen name="Exit" component={Exit} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading/>;
    }
  }
}