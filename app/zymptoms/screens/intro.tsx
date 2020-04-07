import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Intro ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Hi there!</Text>
                <Text style={styles.text}>Before we get started, we just need</Text>
                <Text style={styles.text}>to collect some information from you</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../images/intro.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Symptoms')}>
                    <Text style={styles.ButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F67183'
    },
    textContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 25,
        marginBottom: 25,
        fontFamily: 'poppins-regular',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-regular',
      },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: -50
    },
    buttonsContainer: {
        flex: 1,
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 65,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
