import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HealthConditions ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Any pre-existing health conditions?</Text>
                <Text style={styles.text}>If not, press continue</Text>
            </View>
            <View style={styles.symptomContainer}>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Text style={styles.symptomText}>Asthma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Text style={styles.symptomText}>Diabetes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}>
                    <Text style={styles.symptomText}>Heart Disease</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('OtherHealth')}>
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
    symptomContainer: {
        flex: height/300,
        marginTop: -height/12,
        justifyContent: 'center',
    },
    symptomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    symptomText: {
        color: '#019CDD',
        fontSize: height/45,
        fontFamily: 'poppins-regular',
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
