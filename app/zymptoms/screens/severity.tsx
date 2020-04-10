import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Severity ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Choose a face to describe</Text>
                <Text style={styles.text}>your severity</Text>
            </View>
            <View style={styles.severityContainer}>
                <TouchableOpacity style={styles.smileyButton} activeOpacity={0.5}>
                    <Image width={width/6} source={require('../images/smile5.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smileyButton} activeOpacity={0.5}>
                    <Image width={width/6} source={require('../images/smile4.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smileyButton} activeOpacity={0.5}>
                    <Image width={width/6} source={require('../images/smile3.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smileyButton} activeOpacity={0.5}>
                    <Image width={width/6} source={require('../images/smile2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smileyButton} activeOpacity={0.5}>
                    <Image width={width/6} source={require('../images/smile1.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Symptoms')}>
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
        marginTop: height/14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/44,
      },
    severityContainer: {
        flex: height/200,
        marginTop: -height/12,
        justifyContent: 'center',
    },
    smileyButton: {
        alignItems: 'center',
        margin: height/90,
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
        fontSize: height/55,
        fontFamily: 'poppins-medium',
    },
});
