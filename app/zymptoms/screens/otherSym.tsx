import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';


export default function OtherSym ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Do you have any other </Text>
                <Text style={styles.text}>issues? If not, press continue</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <TextInput style={styles.textInput}> Type Here </TextInput>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.buttonText}>Complete</Text>
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
    TextInputContainer: {
        flex: height/220,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        color: '#ADADAD',
        height: height/2.2,
        width: width/1.4,
        borderRadius: height/17,
        textAlign: 'center'
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