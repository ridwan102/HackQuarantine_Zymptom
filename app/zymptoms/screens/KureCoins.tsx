import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';


export default function KureCoins ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Everyday you put in your symptoms,</Text>
                <Text style={styles.text}>will earn you Kure Coins</Text>
            </View>
            <View style={styles.coinContainer}>
                <Image width={width/3.45} source={require('../images/coin.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Redeemable for giftcards, </Text>
                <Text style={styles.text}>special offers, and more!</Text>
            </View>
            <View style={styles.rewardsContainer}>
                <Image width={width/6} style={styles.rewardsImage} source={require('../images/amazon.png')}/>
                <Image width={width/6} style={styles.rewardsImage} source={require('../images/google.png')}/>
                <Image width={width/6} style={styles.rewardsImage} source={require('../images/itunes.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('DashboardEx')}>
                    <Text style={styles.buttonText}>Continue</Text>
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
    titleContainer: {
        flex: height/900,
        marginTop: height/10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/44,
    },
    coinContainer: {
        flex: height/900,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: height/900,
        marginTop: height/40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardsContainer: {
        flex: height/900,
        flexDirection: 'row',
        marginTop: -height/40,
        alignItems: 'center',
    },
    rewardsImage: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: height/55,
        fontFamily: 'poppins-medium',
    },
});
