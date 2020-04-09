import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Safety ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Safety</Text>
            </View>
            <View style={styles.safetyContainer}>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Stay at home and limit non-essential travels.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Wash hands frequently and avoid touching your face.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Avoid close contact with people at the risk of infecting them or vice verse.</Text>
                </View>
                <View style={styles.safetyButton}>
                    <Text style={styles.safetyText}>Cover coughs and sneezes and clean and disineffect frequently touch surfaces.</Text>
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

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F67183'
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 100
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: 25,
      },
    safetyContainer: {
        flex: 3,
        alignItems: 'center',
        marginVertical: -75,
        justifyContent: 'center', 
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 50,
        margin: 50,
    },
    safetyButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 50,
        margin: 15,
        //shadow
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    safetyText: {
        color: '#000000', 
        fontSize: 15,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#019CDD',
        height: 50,
        width: 300,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        margin: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
