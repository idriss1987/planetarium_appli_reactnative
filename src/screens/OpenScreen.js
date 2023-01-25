import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet, ImageBackground, TouchableOpacity,} from "react-native";
// On récupère la largeur de l'écran
const { width } = Dimensions.get("window");


//on importe la status bar 
import { StatusBar } from "expo-status-bar";
// On importe l'asset image qui va servir de fond d'écran
import openScreen from '../../assets/images/launch_bg.jpg';

export default function OpenScreen({ navigation }) {
    return(
        <ImageBackground source={openScreen} style={styles.container}>
            <Text style={styles.titre} > Planetarium </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("TabNavigator")} style={ styles.to} >
        <Text style={styles.toText} >commencer</Text>
            </TouchableOpacity>
            <StatusBar style= "light"></StatusBar>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    to:{
        backgroundColor:" rgba(39,101,218,0.4)",
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:20,
    },
    toText:{
        color:"#fff",
        fontSize:18,
        fontFamily:"openSansMedium",
    },
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    titre:{
    color: "#fff",
    fontSize:60,
    fontFamily:"Meow",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset:{width:-1,height:1},
    textShadowRadius:10,
    }
});