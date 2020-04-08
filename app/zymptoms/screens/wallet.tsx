import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Wallet ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Wallet</Text>
            </View>
            <View style={styles.rewardsContainer}>
                <Image style={styles.rewardsImage} source={require('../images/coinSmall.png')}/>
                <Text style={styles.rewardsText}>$$.$$$</Text>
            </View>
            <View style={styles.spendContainer}>
                <TouchableOpacity style={styles.spendButton} activeOpacity={.5}
                onPress={() => navigation.push('Offers')}>
                    <Text style={styles.spendText}>Spend</Text>
                    <Image source={require('../images/shop.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.entriesContainer}>
                <Text style={styles.entriesText1}>###</Text>
                <Text style={styles.entriesText2}>Total Entries</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.ButtonText}>Dashboard</Text>
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
        marginTop: 100
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: 25,
    },
    rewardsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -15
    },
    rewardsText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: 37,
        marginLeft: 10
    },
    rewardsImage: {
        marginLeft: 10,
        marginTop: -5
    },
    spendContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15
    },
    spendButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 110,
        width: 300,
        borderRadius: 25,
        flexDirection: 'row'
    },
    spendText: {
        color: '#AA9090', 
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    entriesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entriesText1: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: 37,
    },
    entriesText2: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: 18,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        backgroundColor: '#019CDD',
        height: 65,
        width: 300,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
