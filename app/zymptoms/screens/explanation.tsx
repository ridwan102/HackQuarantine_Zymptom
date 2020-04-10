import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';


export default function Safety ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>To help fight 
                <Text style={{fontWeight: "bold"}}> pandemics</Text>, this app allows</Text>
                <Text style={styles.text}>everyone to input their daily symptoms to</Text>
                <Text style={styles.text}>spread awareness of potential viruses to the</Text>
                <Text style={styles.text}>local and global communities.</Text>
                <Text></Text>
                <Text style={styles.text}>This data can be used by medical professionals</Text> 
                <Text style={styles.text}>and governments to combat the seasonal virus.</Text>
                <Text></Text>
                <Text style={styles.text}>By helping us spread awareness, you will</Text>
                <Text style={styles.text}>receive KureCoins which are redeemable for</Text>
                <Text style={styles.text}>giftcards, special promos and more!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image width={width/6.5} style={styles.imageSide} source={require('../images/coin2.png')}/>
                <Image width={width/3} style={styles.image} source={require('../images/symptom.png')}/>
                <Image width={width/6.5} style={styles.imageSide} source={require('../images/heart.png')}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                    onPress={() => navigation.push('SignUp')}>
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
        backgroundColor: '#FF3954',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: height/750,
        marginTop: height/6,
        justifyContent: 'center',
        alignItems:'center',
    },
    textButton: {
        height: height/2,
        width: width/1.1,
        borderRadius: height/15,
        margin: height/90,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        color: '#FFFFFF', 
        fontSize: height/60,
        fontFamily: 'poppins-regular',
        textAlign: 'center'
    },
    imageContainer: {
        flex: height/800,
        flexDirection: 'row',
    },
    image: {
        marginTop: height/10,
        margin: width/30
    },
    imageSide: {
        marginTop: height/7
    },
    buttonsContainer: {
        flex: height/900,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: height/17.5,
        width: width/1.4,
        borderRadius: height/15,
        marginTop: height/12.5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: height/55
    },
});