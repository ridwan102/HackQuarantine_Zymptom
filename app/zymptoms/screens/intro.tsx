import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';


export default function Intro ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Hi there!</Text>
                <Text style={styles.text}>Before we get started, we just need</Text>
                <Text style={styles.text}>to collect some information from you</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image width={width/2.5} source={require('../images/intro.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('SymptomsDay1')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        flex: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F67183'
    },
    textContainer: {
        flex: height/900,
        marginTop: height/9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: height/35,
        marginBottom: height/50,
        fontFamily: 'poppins-regular',
    },
    text: {
        color: '#FFFFFF',
        fontSize: height/55,
        fontFamily: 'poppins-regular',
    },
    imageContainer: {
        flex: height/400,
        justifyContent: 'center',
        marginLeft: width/15,
        marginTop: -height/14
    },
    buttonsContainer: {
        flex: height/900,
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
        fontFamily: 'poppins-medium',
        fontSize: height/55,
    },
});
