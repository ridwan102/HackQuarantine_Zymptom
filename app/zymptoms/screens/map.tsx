import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


export default function Map ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <TextInput style={styles.textInput}> Search here </TextInput>
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
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.ButtonText}>Dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mapContainer: {        
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    mapStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    buttonsContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: 50,
        width: 300,
        borderRadius: 50,
        margin: 50,
    },
    ButtonText: {
        
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-medium',
    },
    textContainer: {
        flex: 1,
        top: 50,
        position: 'absolute',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#000000',
        color: '#ADADAD',
        height: 50,
        width: 300,
        borderRadius: 50,
      },
});
