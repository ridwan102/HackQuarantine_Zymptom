import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CompProps {
    title: string
}

const Header = (props: CompProps) => {
    return (
        <View style= { styles.container }>
            <Text style= { styles.titleText }> Sign-Up Here!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3954'
    },
    titleText:{
        color: '#FFFFFF',
        fontSize: 30
    }

});

export default Header;