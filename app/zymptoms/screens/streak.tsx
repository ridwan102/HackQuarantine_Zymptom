import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Streak ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Your streak since:</Text>
                <Text style={styles.text2}>Month Day, Year</Text>
            </View>
            <View style={styles.streakContainer1}>
                <Image width={width/1.9} style={styles.streakImage} source={require('../images/streak.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.buttonText}>Dashboard</Text>
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
        marginTop: height/14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/44,
      },
    text2: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/44,
    },
    streakContainer1: {
        flex: height/200,
        alignItems: 'center',
    },
    streakImage: {
        marginTop: -height/20,
    },
    buttonsContainer: {
        flex: height/900,
        marginTop: -height/3.5
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
        fontSize: height/55,
        fontFamily: 'poppins-medium',
    },
});
