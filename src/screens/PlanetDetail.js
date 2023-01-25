import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet ,Image , ScrollView} from "react-native";
// on importe le staus bar
import { StatusBar } from "expo-status-bar";
const {width} = Dimensions.get("window");

// on importe autoheight webview
import AutoHeightWebView from "react-native-autoheight-webview";

export default function PlanetDetail({ route }){
    // on recupere les donnees de la route 
    const {item, urlMedia } = route.params ;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Image source={{uri: urlMedia + item.medias[0].filename}} style={styles.image } />
            <AutoHeightWebView source={{html:'<div style="color:white; font-size:18px;text-align:justify;padding:0 15px;">'+item.description+'</div>' }}  scalesPageToFit={false} scrollEnabled={false} viewportContent={'width=device-width,user-scalable=no'} ></AutoHeightWebView>
            <Image source={{uri: urlMedia+ item.medias[1].filename}} style={styles.image2}/>
            </ScrollView>
            <StatusBar style="light"/>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: "#000"
    },
    image:{
    width: width/2,
    height:width/2,
    },
    image2:{
    width:width/2,
    height:(width/2) / 1.21,
    resizeMode:"contain",
    alignSelf:"center",
    marginBottom:35,
    }

});