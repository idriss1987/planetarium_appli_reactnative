import { createStackNavigator } from "@react-navigation/stack";
import PlanetDetail from "../screens/PlanetDetail";
// instanciation de la pile de navigation
const Stack =  createStackNavigator();
// on importe les ecrans 
import PlanetScreen from "../screens/PlanetScreen";

// on exporte la pile de navigation
export default function PlanetStack(){
    return (
            <Stack.Navigator >
                <Stack.Screen name="PlanetScreen" component= {PlanetScreen} options={{headerShown: false}} />
                <Stack.Screen name="PlanetDetail" component= {PlanetDetail} options={({route})=>({title: route.params.title, headerStyle:{backgroundColor:"#000"},headerTintColor:"#fff"})} />
            </Stack.Navigator>
        );
}