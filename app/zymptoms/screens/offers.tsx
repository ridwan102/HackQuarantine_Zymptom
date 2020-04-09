import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Offers ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Offers</Text>
            </View>
            <View style={styles.offerContainer}>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Text style={styles.offerPrice1}>Free</Text>
                    <Image style={styles.image} source={require('../images/spotify.png')}/>
                    <Text style={styles.offerText}>1 Month of Spotify Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Image style={styles.coinXSmall} source={require('../images/coinXSmall.png')}/>
                    <Text style={styles.offerPrice2}>400</Text>
                    <Image style={styles.image} source={require('../images/google.png')}/>
                    <Text style={styles.offerText}>$10 Google Play Giftcard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Image style={styles.coinXSmall} source={require('../images/coinXSmall.png')}/>
                    <Text style={styles.offerPrice2}>400</Text>
                    <Image style={styles.image} source={require('../images/amazon.png')}/>
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
    offerContainer: {
        flex: 3,
        alignItems: 'center',
        marginVertical: -50
    },
    offerButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 50,
        margin: 30,
    },
    coinXSmall: {
        marginLeft: 130,
        marginTop: 7.5
    },
    offerPrice1: {
        color: '#000000', 
        fontSize: 15,
        fontFamily: 'poppins-regular',
        marginRight: -200,
        marginTop: 5
    },
    offerPrice2: {
        color: '#000000', 
        fontSize: 15,
        fontFamily: 'poppins-regular',
        marginRight: -200,
        marginTop: -32.5
    },
    image: {
        marginTop: -35
    },
    offerText: {
        color: '#000000', 
        fontSize: 15,
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
        margin: 10
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
