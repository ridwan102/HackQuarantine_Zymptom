import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function KureCoins ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>For every 7 continious days</Text>
                <Text style={styles.text}>you put in your symptoms,</Text>
                <Text style={styles.text}>you will earn Kure Coins!</Text>
            </View>
            <View style={styles.coinContainer}>
                <Image source={require('../images/coin.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Redeemable for giftcards, </Text>
                <Text style={styles.text}>special offers, and more!</Text>
            </View>
            <View style={styles.rewardsContainer}>
                <Image style={styles.rewardsImage} source={require('../images/amazon.png')}/>
                <Image style={styles.rewardsImage} source={require('../images/google.png')}/>
                <Image style={styles.rewardsImage} source={require('../images/itunes.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('DashBoardEx')}>
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
    titleContainer: {
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
    coinContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    rewardsImage: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flex: 1,
        marginTop: 50
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 65,
        width: 300,
        borderRadius: 50,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-medium',
    },
});
