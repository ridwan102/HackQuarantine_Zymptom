import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Account ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Account</Text>
            </View>
            <View style={styles.userContainer}>
                <Image source={require('../images/user.png')}/>
                <Text style={styles.userText}>User Name</Text>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <Text style={styles.userText}>First and Last</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <Text style={styles.userText}>email@user.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <Text style={styles.userText}>Phone Number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <Text style={styles.userText}>City and State</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} activeOpacity={.5}>
                    <Text style={styles.userText}>Zip Code</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                    onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.ButtonText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('SignIn')}>
                    <Text style={styles.ButtonText}>Logout</Text>
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
    userContainer: {
        flex: 3,
        alignItems: 'center',
        marginVertical: -75,
        justifyContent: 'center', 
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 50,
        margin: 50,
    },
    userButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 50,
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
    userText: {
        color: '#000000', 
        fontSize: 17,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Button: {
        backgroundColor: '#019CDD',
        height: 50,
        width: 135,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        margin: 10
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
