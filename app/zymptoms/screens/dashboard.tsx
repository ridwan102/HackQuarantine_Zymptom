import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';


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
                    <Image style={styles.imageSymptom} source={require('../images/medal.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Streak')}>
                    <Text style={styles.dashboardText}>Streak</Text>
                    <Image style={styles.imageMedal} source={require('../images/medal.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                    onPress={() => navigation.push('Map')}>
                    <Text style={styles.dashboardText}>Map</Text>
                    <Image style={styles.imageMap} source={require('../images/world.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Wallet')}>
                    <Text style={styles.dashboardText}>Wallet</Text>
                    <Image style={styles.imageCoin} source={require('../images/coinSmall.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Safety')}>
                    <Text style={styles.dashboardText}>Safety</Text>
                    <Image style={styles.imageVirus} source={require('../images/virus.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardButton} activeOpacity={.5}
                onPress={() => navigation.push('Account')}>
                    <Text style={styles.dashboardText}>Account</Text>
                    <Image style={styles.imageAccount} source={require('../images/account.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F67183'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: 25,
        marginTop: height/15
      },
    dashboardContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height/100,
    },
    dashboardButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.45,
        borderRadius: 50,
        flexDirection: 'row',
    },
    dashboardText: {
        color: '#000000', //#AA9090
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    imageSymptom: {
        marginRight: '6%'
    },
    imageMedal: {
        marginRight: '1%'
    },
    imageMap: {
        marginRight: '-1%'
    },
    imageCoin: {
        marginRight: '1.5%'
    },
    imageVirus: {
        marginRight: '1%'
    },
    imageAccount: {
        marginRight: '4%'
    },
});
