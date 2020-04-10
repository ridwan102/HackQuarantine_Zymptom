import React from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


export default function Map ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <TextInput style={styles.textInput}>Search</TextInput>
            </View>
            <View style={styles.mapContainer}>
                <Image source={require('../images/map.png')}/>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        flex: height/300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: height/10,
        backgroundColor: '#000000',
        height: height/15,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: '#ADADAD',
        fontSize: height/55,
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
