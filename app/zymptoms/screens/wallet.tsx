import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Wallet ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Wallet</Text>
            </View>
            <View style={styles.rewardsContainer}>
                <Image  width={width/10} style={styles.rewardsImage} source={require('../images/coinSmall.png')}/>
                <Text style={styles.rewardsText}>$$$</Text>
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
        backgroundColor: '#F67183'
    },
    textContainer: {
        alignItems: 'center',
        flex: height/800,
        marginTop: height/20,
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/30,
        marginTop: height/15
    },
    rewardsContainer: {
        flex: height/900,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -height/9
    },
    rewardsText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/30,
        marginLeft: width/40
    },
    rewardsImage: {
        marginTop: -height/150
    },
    spendContainer: {
        flex: height/900,
        alignItems: 'center',
    },
    spendButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        flexDirection: 'row',
    },
    spendText: {
        color: '#000000', 
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    entriesContainer: {
        flex: height/900,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entriesText1: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/30,
    },
    entriesText2: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/55,
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
        marginLeft: width/6.5
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: height/55
    },
});
