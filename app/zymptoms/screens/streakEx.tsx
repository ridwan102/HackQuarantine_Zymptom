import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function StreakEx ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Ok great! You just made your</Text>
                <Text style={styles.text}>first streak!</Text>
            </View>
            <View style={styles.streakContainer}>
                <View style={styles.streakButton}>
                    <Text style={styles.streakText}>Day 1</Text>
                </View>
                <View style={[styles.streakButton, styles.opacity]}>
                    <Text style={styles.streakText}>Day 2</Text>
                </View>
                <View style={[styles.streakButton, styles.opacity]}>
                    <Text style={styles.streakText}>Day 3</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('KureCoins')}>
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
    textContainer: {
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
    streakContainer: {
        flex: height/400,
        justifyContent: 'center',
        marginTop: -height/13
    },
    streakButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/50,
    },
    streakText: {
        color: '#019CDD',
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    opacity:{
        opacity: 0.5
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
