import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Exit ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Now go and explore the app! We</Text>
                <Text style={styles.text}>hope you will help your community </Text>
                <Text style={styles.text}>battle seasonal illnesses!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image width={width/1.2} source={require('../images/exit.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
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
    text: {
        color: '#FFFFFF',
        fontSize: height/44,
        fontFamily: 'poppins-regular',
    },
    imageContainer: {
        flex: height/400,
        justifyContent: 'center',
        marginLeft: width/15,
        marginTop: -height/20
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
