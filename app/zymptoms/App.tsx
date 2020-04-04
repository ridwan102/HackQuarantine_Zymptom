import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Get rewards for helping to combat COVID-19</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3954',
    fontFamily: 'sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
  },
});