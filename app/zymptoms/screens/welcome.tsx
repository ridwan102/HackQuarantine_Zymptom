import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Welcome ({navigation} : { navigation: any})  { 
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
                {/* <Image 
                    source={require('../images/logo.png')}
                /> */}
                <View style={styles.content}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}> Z </Text>
            </View>
                <Text style={styles.titleText}>Zymtom</Text>
            </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Help combat illnesses in your area!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Login')}>
                    <Text style={styles.buttonText}> Login Now </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('SignUp')}>
                    <Text style={styles.buttonText}> Create Account </Text>
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
        justifyContent:'center',
        marginTop: 70
      },
    buttonsContainer: {
        flex: 1,
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
    titleText: {
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'poppins-semibold',
    },
    textContainer: {
        flex: 1,
        marginTop: -30
    },
    text: {
        color: '#FFFFFF',
        marginTop: -20,
        fontSize: 15,
        fontFamily: 'poppins-regular',
    },
    buttonContainer: {
        flex: 2,
        marginTop: -140
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 50,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-semibold',
      fontSize: 15
    },
    leftDesign:{
        flex: 1
    },
});
