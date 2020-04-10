import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

export default function Dashboard ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Dashboard</Text>
            </View>
            <View style={styles.dashboardContainer}>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Symptoms')}>
                    <Text style={styles.dashboardText}>Symptoms</Text>
                    <Image width={width/6.5} style={styles.imageSymptom} source={require('../images/symptom1.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Streak')}>
                    <Text style={styles.dashboardText}>Streak</Text>
                    <Image width={width/6.5} style={styles.imageMedal} source={require('../images/medal.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Map')}>
                    <Text style={styles.dashboardText}>Map</Text>
                    <Image width={width/6.5} style={styles.imageMap} source={require('../images/world.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Wallet')}>
                    <Text style={styles.dashboardText}>Wallet</Text>
                    <Image width={width/6.5} style={styles.imageCoin} source={require('../images/coinSmall.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Safety')}>
                    <Text style={styles.dashboardText}>Safety</Text>
                    <Image width={width/6.5} style={styles.imageVirus} source={require('../images/virus.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Account')}>
                    <Text style={styles.dashboardText}>Account</Text>
                    <Image width={width/6.5}style={styles.imageAccount} source={require('../images/account.png')}/>
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
        flex: height/800,
        marginTop: height/55,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: height/30,
        marginTop: height/15
      },
    dashboardContainer: {
        flex: height/150,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height/100,
    },
    dashboardButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        flexDirection: 'row',
    },
    dashboardText: {
        color: '#000000', //#AA9090
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    imageSymptom: {
        marginRight: width/35
    },
    imageMedal: {
        
    },
    imageMap: {
        
    },
    imageCoin: {
        marginRight: width/150
    },
    imageVirus: {
        marginRight: width/150
    },
    imageAccount: {
        marginRight: width/50
    },
});
