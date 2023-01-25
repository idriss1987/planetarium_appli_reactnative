import React, { useEffect } from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Image } from "react-native";
// On importe la status bar
import { StatusBar } from 'expo-status-bar';
// On importe axios
import axios from "axios";
// On récupère la largeur de l'écran
const { width } = Dimensions.get("window");
// On déclare les urls de l'api
const url = "https://toctocapi.com/api/themes/planetarium";
const urlImage = "https://toctocapi.com/images-api/";
// On récupère le fond dans les assets
const bg = require("../../assets/images/black-sun.jpg");
//
export default function PlanetScreen({ navigation }) {
    // On déclare les states
    const [listDatas, setListDatas] = React.useState([]);
    // On charge les données depuis l'api
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            //console.log(response.data);
            setListDatas(response.data.categories[0].items);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    // On déclare la fonction qui va afficher les données de la liste (renderItem)
    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={ styles.to } onPress={() => navigation.navigate("PlanetDetail",{item: item, urlMedia: urlImage, title: item.name })}>
                <Image source={{ uri: urlImage + item.medias[0].filename }} style={ styles.image } />
                <Text style={ styles.toText }>{ item.name }</Text>
            </TouchableOpacity>
        );
    };
    // Rendu de la vue
    return(
        <ImageBackground source={ bg } style={ styles.bg }>
            <SafeAreaView style={styles.container}>
                <FlatList data={ listDatas } keyExtractor={item=>item["@id"]} renderItem={ renderItem }/>
            </SafeAreaView>
            <StatusBar style="dark" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg:{
        flex: 1,
        width: width,
    },
    container:{
        flex: 1,
        paddingTop:30,
    },
    to:{
        backgroundColor:"rgba(255,255,255,0.3)",
        flexDirection:"row",
        alignItems:"center",
        width:width *0.8,
        marginLeft:width * 0.05,
        marginBottom:15,
        padding:10,
        borderRadius:50,
    },
    image:{
    width: 50,
    height:50,
    borderRadius:25,
    },
    toText:{
        color: "#fff",
        fontSize:20,
        fontFamily:"openSansMedium",
        marginLeft:15,
    }
});
