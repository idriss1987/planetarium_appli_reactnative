import { createStackNavigator } from "@react-navigation/stack";
import HomeDetail from "../screens/HomeDetail";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="HomeScreen" component= {HomeScreen} options={{ headerShown: false}} />
            <Stack.Screen name="HomeDetail" component= {HomeDetail} options={{ title:"Le systeme Solaire"}}/>
        </Stack.Navigator>
        )
}