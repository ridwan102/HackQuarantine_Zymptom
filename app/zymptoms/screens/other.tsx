import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


export default function Other ({navigation} : { navigation: any})  {
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
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('HealthConditions')}>
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
    TextInputContainer: {
        flex: 4,
        marginTop: -5
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 400,
        width: 325,
        borderRadius: 50,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    buttonsContainer: {
        flex: 1,
        marginTop: -300
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