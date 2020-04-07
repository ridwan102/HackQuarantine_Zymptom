import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Streak ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Ok great! You just made your</Text>
                <Text style={styles.text}>first streak!</Text>
            </View>
            <View style={styles.streakContainer}>
                <Text style={styles.streakText}>Day 1</Text>
                <Text style={styles.streakText}>Day 2</Text>
                <Text style={styles.streakText}>Day 3</Text>
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
    streakContainer: {
        flex: 3,
        marginTop: -65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    streakText: {
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
