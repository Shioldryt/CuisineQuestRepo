<<<<<<< HEAD
import React from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";

export default function HomeScreen() {


    return (
        <SafeAreaView style={style.main}>
            <Text style={style.title}> Hello is this working? Is this broken then?</Text>
        </SafeAreaView>
    )

}

const {width, height} = Dimensions.get('screen')

const style = StyleSheet.create({
    main: {
        backgroundColor: '#1D2B53',
        width,
        height
    },

    title: {
        color: '#00FF00',
        fontFamily: "Copenhagen"
        
    }
})
=======
import { View, Text } from "react-native"

export default function Home({ }) {

    return (
        <View>
            <Text>Working</Text>
        </View>
    )
}
>>>>>>> main
