import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function StreakEx ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Ok great! You just made your</Text>
                <Text style={styles.text}>first streak!</Text>
            </View>
            <View style={styles.streakContainer1}>
                <Text style={styles.streakText1}>Day 1</Text>
                <Image style={styles.streakImage} source={require('../images/check.png')}/>
            </View>
            <View style={styles.streakContainer2}>
                <Text style={styles.streakText2}>Day 2</Text>
                <Text style={styles.streakText2}>Day 3</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('KureCoins')}>
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
    textContainer: {
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
    streakContainer1: {
        flex: 1,
        marginTop: -65,
        marginLeft: -55,
        alignItems: 'center',
        flexDirection: 'row'
    },
    streakText1: {
        backgroundColor: '#FFFFFF',
        height: 110,
        width: 300,
        borderRadius: 75,
        margin: 10,
        color: '#000000',
        fontSize: 29,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'poppins-regular',
    },
    streakImage: {
        marginTop: -10,
        marginLeft: -100
    },
    streakContainer2: {
        flex: 2,
        marginTop: -102.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    streakText2: {
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        height: 110,
        width: 300,
        borderRadius: 75,
        margin: 10,
        color: '#000000',
        fontSize: 29,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: 1,
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 65,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-medium',
    },
});
