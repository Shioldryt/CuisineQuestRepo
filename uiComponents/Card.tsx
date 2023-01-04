import { Box, Image } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ width, height}}>
            <Box style={style.imgBox} >
                <Image source={require('../assets/pic/sushi.png')} resizeMode='cover'/>
            </Box>
            <Text>Prawn Sushi Bake</Text>
        </View>
    );
}

const { width, height } = Dimensions.get('screen')

const style = StyleSheet.create({
    main: {
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'Copenhagen',
        fontSize: 50,
        color: 'white'
    },
    titleBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    imgBox: {
        padding: 15,
        width,
        height: '10%'
    }
})