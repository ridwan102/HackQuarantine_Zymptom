import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Offers ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Offers</Text>
            </View>
            <View style={styles.offerContainer}>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Text style={styles.offerPrice1}>Free</Text>
                    <Image width={width/8} style={styles.image} source={require('../images/spotify.png')}/>
                    <Text style={styles.offerText}>1 Month of Spotify Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Image width={width/18} style={styles.coinXSmall} source={require('../images/coinXSmall.png')}/>
                    <Text style={styles.offerPrice2}>400</Text>
                    <Image width={width/8} style={styles.image} source={require('../images/googleSmall.png')}/>
                    <Text style={styles.offerText}>$10 Google Play Giftcard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Image width={width/18} style={styles.coinXSmall} source={require('../images/coinXSmall.png')}/>
                    <Text style={styles.offerPrice2}>400</Text>
                    <Image width={width/8} style={styles.image} source={require('../images/amazonSmall.png')}/>
                    <Text style={styles.offerText}>$10 Amazon Giftcard</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.ButtonText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Wallet')}>
                    <Text style={styles.ButtonText}>Wallet</Text>
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
        flex: height/1000,
        marginTop: height/12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/30,
      },
    offerContainer: {
        flex: height/300,
        alignItems: 'center',
        marginTop: height/1000,
    },
    offerButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        marginTop: height/30,
        marginBottom: height/50
    },
    coinXSmall: {
        marginLeft: width/3.2,
    },
    offerPrice1: {
        color: '#000000', 
        fontSize: height/60,
        fontFamily: 'poppins-regular',
        marginRight: -width/2.2,
    },
    offerPrice2: {
        color: '#000000', 
        fontSize: height/60,
        fontFamily: 'poppins-regular',
        marginRight: -width/2.2,
        marginTop: -height/35
    },
    image: {
        marginTop: -height/35
    },
    offerText: {
        color: '#000000', 
        fontSize: height/55,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: height/900,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Button: {
        backgroundColor: '#019CDD',
        height: height/17.5,
        width: width/2.8,
        borderRadius: height/15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: height/90
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: height/55
    },
});
