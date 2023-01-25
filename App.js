// on importe usefont 
import { useFonts } from "expo-font";
// on importe le container 
import { NavigationContainer } from "@react-navigation/native";
// on importe les ecrans ou navigation
import MainStack from "./src/navigations/MainStack";
import LoadingScreen from "./src/screens/LoadingScreen";

export default function App() {
  // on charge les fonts 
  let [fontsLoaded] = useFonts({
  'openSansMedium': require('./assets/fonts/OpenSans-Medium.ttf'),
  'openSansLight': require ('./assets/fonts/OpenSans-Light.ttf'),
  'Meow': require('./assets/fonts/MeowScript-Regular.ttf'),
  'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
  });
// on verifie si les fonts sont chargées 
  if(!fontsLoaded){
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

