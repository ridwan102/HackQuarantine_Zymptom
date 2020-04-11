import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';

export default function DashboardEx ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>This is your main dashboard, where</Text>
                <Text style={styles.text}>you will have access to everything!</Text>
            </View>
            <View style={styles.dashboardContainer}>
                <View style={styles.dashboardButton} >
                    <Text style={styles.dashboardText}>Symptoms</Text>
                    <Image width={width/6.5} style={styles.imageSymptom} source={require('../images/symptom.png')}/>
                </View>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Streak</Text>
                    <Image width={width/6.5} source={require('../images/medal.png')}/>
                </View>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Map</Text>
                    <Image width={width/6.5} source={require('../images/world.png')}/>
                </View>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Wallet</Text>
                    <Image width={width/6.5} style={styles.imageCoin} source={require('../images/coinSmall.png')}/>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Exit')}>
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
        marginTop: height/14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/44,
      },
    dashboardContainer: {
        flex: height/300,
        marginTop: -height/12,
        justifyContent: 'center',
    },
    dashboardButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
        flexDirection: 'row'
    },
    dashboardText: {
        color: '#000000', //'#AA9090'
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    imageSymptom: {
        marginRight: width/35
    },
    imageCoin: {
        marginRight: width/150
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
