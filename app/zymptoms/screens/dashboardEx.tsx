import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function DashboardEx ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>This is your main dashboard, where</Text>
                <Text style={styles.text}>you will have access to everything!</Text>
            </View>
            <View style={styles.dashboardContainer}>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Streak</Text>
                    <Image source={require('../images/medal.png')}/>
                </View>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Map</Text>
                    <Image source={require('../images/world.png')}/>
                </View>
                <View style={styles.dashboardButton}>
                    <Text style={styles.dashboardText}>Wallet</Text>
                    <Image style={styles.imageCoin} source={require('../images/coinSmall.png')}/>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Exit')}>
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
    dashboardContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 50,
        margin: 25,
        flexDirection: 'row'
    },
    dashboardText: {
        color: '#AA9090', 
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    imageCoin: {
        marginRight: 15
    },
    buttonsContainer: {
        flex: 1,
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 50,
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
