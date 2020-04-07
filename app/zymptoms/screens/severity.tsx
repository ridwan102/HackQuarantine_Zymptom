import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Severity ()  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Choose a face to describe</Text>
                <Text style={styles.text}>your cough</Text>
            </View>
            <View style={styles.severityContainer}>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Image source={require('../images/smile5.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Image source={require('../images/smile4.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Image source={require('../images/smile3.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Image source={require('../images/smile2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Image source={require('../images/smile1.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
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
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: 20,
      },
    severityContainer: {
        flex: 4,
        justifyContent: 'center',
        marginTop: -30
    },
    symptomButton: {
        alignItems: 'center',
        margin: 10,
    },
    symptomText: {
        color: '#019CDD',
        fontSize: 20,
        marginLeft: 30
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
