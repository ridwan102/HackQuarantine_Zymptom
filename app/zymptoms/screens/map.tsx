import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


export default function Map ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <TextInput style={styles.textInput}>Search</TextInput>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 40.7128,
                        longitude: -74.0060,
                        latitudeDelta: .5,
                        longitudeDelta: .5, 
                    }}
                 />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.buttonText}>Dashboard</Text>
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
    },
    mapContainer: { 
        flex: height,       
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    mapStyle: {
        height: height,
        width: width,
    },
    textContainer: {
        marginTop: height/11,
        backgroundColor: '#FFFFFF',
        height: height/15,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: '#ADADAD',
        fontSize: height/55,
      },
    buttonsContainer: {
        flex: height/900,
        marginTop: height/1.5
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
