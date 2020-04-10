import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Safety ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Safety</Text>
            </View>
            <View style={styles.safetyContainer}>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Stay at home and limit</Text>
                    <Text style={styles.safetyText}>non-essential travels.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Wash hands frequently</Text>
                    <Text style={styles.safetyText}>avoid touching your face.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Avoid close contact with people</Text>
                    <Text style={styles.safetyText}>at the risk of infecting them</Text>
                    <Text style={styles.safetyText}>or vice verse.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Cover coughs and sneezes. Clean</Text>
                    <Text style={styles.safetyText}>and disineffect frequently</Text>
                    <Text style={styles.safetyText}>touched surfaces.</Text>
                </View>
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
        backgroundColor: '#F67183',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: height/900,
        marginTop: height/14,
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/30,
      },
    safetyContainer: {
        flex: height/300,
        marginTop: -height/12,
        justifyContent: 'center',
    },
    safetyButton:{
        justifyContent: 'center', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    safetyText: {
        color: '#000000', 
        fontSize: height/60,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: height/900,
        alignItems: 'center',
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
        fontSize: height/55
    },
});
