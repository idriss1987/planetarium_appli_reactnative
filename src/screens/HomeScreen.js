import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

// on importe les constante expo
import Constants from 'expo-constants';

import { StatusBar } from "expo-status-bar";

const {width} = Dimensions.get("window");
// on importe l'asset image qui va servir dans l'ecran 
import homeTerre from '../../assets/images/home-terre.jpg';

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titre}> Planetarium </Text>
            <ScrollView style={styles.scroll}>
                <Text style={styles.paragraphe }>Une application pour mieux connaitre les planètes du Système Solaire auquel appartient notre planète bleue la Terre.</Text>
                <Image source={homeTerre} style={styles.image} />
                <TouchableOpacity onPress={()=>navigation.navigate("HomeDetail")} style={styles.to}>
                <Text style= {styles.toText}> voir la video de présentation</Text>
                </TouchableOpacity>
                <Text style={styles.paragraphe}>
                Vous découvrirez également quelques bizarreries de l'espace comme des objets insolites envoyés par l'Humain.
                </Text>
                <Text style={styles.paragraphe}>Bonne visite</Text>
                
            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#000",
width:width,
paddingTop: Constants.statusBarHeight,
},
titre:{
color:"#fff",
fontSize:50,
fontFamily:"Meow",
textAlign:"center",
},
paragraphe:{
    color:"#fff",
    fontSize:18,
    fontFamily:"openSansLight",
    textAlign:"justify",
    marginVertical:15,

},
image:{
    width: width-30,
    height:(width -30) * 608/1821,
    marginVertical:15,
},
scroll:{
    paddingHorizontal:15,
},
to:{
    backgroundColor:"#c0d904",
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:20,
    marginBottom:15,
},
toText:{
    color:"#fff",
    fontSize:25,
    fontFamily:"openSansMedium",
    textAlign:"center",
}
})