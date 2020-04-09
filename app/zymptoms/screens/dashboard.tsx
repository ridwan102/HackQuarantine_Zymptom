import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Dashboard ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Dashboard</Text>
            </View>
            <View style={styles.dashboardContainer}>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Streak')}>
                    <Text style={styles.dashboardText}>Streak</Text>
                    <Image source={require('../images/medal.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Map')}>
                    <Text style={styles.dashboardText}>Map</Text>
                    <Image source={require('../images/world.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Wallet')}>
                    <Text style={styles.dashboardText}>Wallet</Text>
                    <Image style={styles.imageCoin} source={require('../images/coinSmall.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Safety')}>
                    <Text style={styles.dashboardText}>Safety</Text>
                    <Image style={styles.imageCoin} source={require('../images/virus.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Account')}>
                    <Text style={styles.dashboardText}>Account</Text>
                    <Image style={styles.imageCoin} source={require('../images/account.png')}/>
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
    dashboardContainer: {
        flex: 10,
        alignItems: 'center',
        marginVertical: -75
    },
    dashboardButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 50,
        margin: 15,
        flexDirection: 'row'
    },
    dashboardText: {
        color: '#000000', //#AA9090
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    imageCoin: {
        marginRight: 15
    },
});
