import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


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
                <TouchableOpacity style={styles.symptomButton} activeOpacity={0.5}
                onPress={() => navigation.push('Other')}>
                    <Text style={styles.symptomText}>Other</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('StreakEx')}>
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
    symptomContainer: {
        flex: 3,
        marginTop: -65,
        justifyContent: 'center',
    },
    symptomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    symptomText: {
        color: '#019CDD',
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: 1,
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 50,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-medium',
    },
});
