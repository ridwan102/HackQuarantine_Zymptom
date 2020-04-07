import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function DashBoardEx ()  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>This is your main dashboard, where</Text>
                <Text style={styles.text}>you will have access to everything!</Text>
            </View>
            <View style={styles.dashboardContainer}>
                <Text style={styles.dashboardText}>Streak</Text>
                <Text style={styles.dashboardText}>Map</Text>
                <Text style={styles.dashboardText}>Rewards</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
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
        marginTop: -65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardText: {
        backgroundColor: '#FFFFFF',
        height: 110,
        width: 300,
        borderRadius: 25,
        margin: 10,
        color: '#AA9090',
        fontSize: 20,
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
