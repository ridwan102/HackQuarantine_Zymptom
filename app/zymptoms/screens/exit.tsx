import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Exit ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Now go and explore the app! We</Text>
                <Text style={styles.text}>hope you will help your community </Text>
                <Text style={styles.text}>battle seasonal illnesses!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../images/exit.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
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
    text: {
        color: '#FFFFFF',
        fontSize: 20,
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
        height: 50,
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
