import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

export default function Welcome ({navigation} : { navigation: any})  { 
    return (
        <View style= { styles.container }>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}> Z </Text>
            </View>
                <Text style={styles.titleText}>Zymptom</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Help combat illnesses in your area!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('SignIn')}>
                    <Text style={styles.buttonText}>Login</Text>
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

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        flex: height,
        justifyContent: 'center',
        backgroundColor: '#FF3954',
        alignItems: 'center',
    },
    content: {
        flex: height/450,
        alignItems: 'center',
        justifyContent:'center',
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
        flex: height/900,
        marginTop: -height/20,
    },
    text: {
        color: '#FFFFFF',
        marginTop: -height/40,
        fontSize: height/55,
        fontFamily: 'poppins-regular',
    },
    buttonContainer: {
        flex: height/450,
        marginTop: -height/6,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: height/17.5,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'poppins-semibold',
      fontSize: height/55
    },
    leftDesign:{
        flex: height/900
    },
});
