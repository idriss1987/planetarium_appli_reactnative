import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet} from "react-native";

import { Video } from 'expo-av';

const {width } = Dimensions.get("window");

import { StatusBar } from "expo-status-bar";

export default function HomeDetail(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style= {styles.paragraphe}>Une video de presentation du systeme solaire </Text>
            <Text style= {styles.paragraphe}>Bon visionnage!</Text>
            <Video style={styles.video} source={require("../../assets/videos/le-systeme-solaire.mp4")} 
            useNativeControls={true} resizeMode="contain" isLooping={false} usePoster={true} posterSource={require("../../assets/videos/poster.png")} shouldPlay={true}/>
            <StatusBar style="dark"/>
        </SafeAreaView>
        )

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:"#000",
    },
    paragraphe:{
        color:"#fff",
        fontSize:18,
        fontFamily:"openSansLight",
        textAlign:"justify",
        marginVertical:15,
        paddingHorizontal:15,
    },
    video:{
    width:width,
    height: width *720/ 1280,
    }
});