import React from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";
import { Box } from "native-base";
import Card from "../uiComponents/Card";
import { FlashList } from "@shopify/flash-list";


export default function HomeScreen() {

    const DATA = [
        {
            card: Card
        }
    ]

    return (
        <SafeAreaView style={style.main}>
            <FlashList renderItem={Card} data={DATA}>
            </FlashList>
        </SafeAreaView>
    )

}

const { width, height } = Dimensions.get('screen')

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000000',
        width,
        height
    },

    title: {
        color: '#00FF00',
        fontFamily: "QuickKiss",
        fontSize: 20

    }
})
