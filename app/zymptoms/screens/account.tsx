import React from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Account ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Account</Text>
            </View>
            <View style={styles.userContainer}>
                <Image width={width/3.5} source={require('../images/user.png')}/>
                <Text style={styles.userText}>User Name</Text>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <TextInput placeholder="First and Last Names" style={styles.userText}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <TextInput placeholder="Email" style={styles.userText}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <TextInput placeholder="Phone Number" style={styles.userText}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <TextInput placeholder="City and State" style={styles.userText}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <TextInput placeholder="Zip Code" style={styles.userText}></TextInput>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                    onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.buttonText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('SignIn')}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        flex: height,
        backgroundColor: '#F67183'
    },
    textContainer: {
        alignItems: 'center',
        marginTop: height/8
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/30,
      },
    userContainer: {
        flex: height/300,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#FFFFFF',
        borderRadius: height/17,
        width: width/1.2,
        marginLeft: width/12,
    },
    userButton:{
        justifyContent: 'center', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/17.5,
        width: width/1.4,
        borderRadius: 50,
        margin: height/90,
        //shadow
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.8,
        elevation: height/150,
        shadowOffset : { width: width/100, height: height/75},
    },
    userText: {
        color: '#000000', 
        fontSize: height/55,
        fontFamily: 'poppins-regular',
        textAlign: 'center',
        width: width/1.2,
    },
    buttonsContainer: {
        flex: height/900,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: height/17.5,
        width: width/2.8,
        borderRadius: height/15,
        margin: height/90,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: height/55
    },
});
