import { createStackNavigator } from "@react-navigation/stack";
// instanciation de la pile de navigation
const Stack =  createStackNavigator();
//on importe les ecrans 
import OpenScreen from "../screens/OpenScreen";
import TabNavigator from "./TabNavigator";

// on exporte la pile de navigation
export default function MainStack(){
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="OpenScreen" component= {OpenScreen} />
                <Stack.Screen name="TabNavigator" component= {TabNavigator} />
            </Stack.Navigator>
        );
}