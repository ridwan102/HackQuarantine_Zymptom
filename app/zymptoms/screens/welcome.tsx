import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Welcome ()  { 
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
                <Image 
                    source={require('../images/logo.png')}
                />
                <Text style={styles.text}>Get rewards for helping combat COVID-19</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
                    <Text style={styles.ButtonText}> Login Now </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
                    <Text style={styles.ButtonText}> Create Account </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leftDesign}>
                <Image source={require('../images/leftDesign.png')} />
            </View>
            {/* <View style={styles.rightDesign}>
                <Image source={require('../images/rightDesign.png')} />
            </View> */}
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
        flex: 2,
        alignItems: 'center',
      },
    text: {
        color: '#FFFFFF',
        marginTop: -20,
        fontSize: 15,
        fontFamily: 'poppins-regular',
      },
      buttonsContainer: {
          flex: 1,
      },
      Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: 40,
        width: 300,
        borderRadius: 20,
        margin: 10,
      },
      ButtonText: {
        color: '#000000',
        fontFamily: 'poppins-semibold',
        fontSize: 13
        //Font.loadAsync
      },
      leftDesign:{
          flex: 1
      },
    //   rightDesign:{
    //       flex: -1
    //   }

});
