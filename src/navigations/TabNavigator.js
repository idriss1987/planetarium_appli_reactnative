import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
// On importe les écrans
import HomeStack from './HomeStack';
import PlanetStack from './PlanetStack';
// Instanciation du navigateur de tab
const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let IconLibrary;
                switch (route.name) {
                    case "HomeStack":
                        iconName = "home";
                        IconLibrary = FontAwesome;
                        color = focused ? "#c0d904" : "#ccc";
                        break;
                    case "PlanetStack":
                        iconName = "planet";
                        IconLibrary = Ionicons;
                        color = focused ? "#F23545" : "#ccc";
                        break;
                    default:
                        iconName ="hourglass-end";
                        IconLibrary = FontAwesome;
                        color = focused ? "#F10BF4" : "#ccc";
                }
                return <IconLibrary name={iconName} size={size} color={color} />;
            },
            tabBarLabel: ({ focused, color }) => {
                let label;
                switch (route.name) {
                    case "HomeStack":
                        label = "Accueil";
                        color = focused ? "#c0d904" : "#ccc";
                        break;
                    case "PlanetStack":
                        label = "Planètes";
                        color = focused ? "#F23545" : "#ccc";
                        break;
                    default:
                        label = "????";
                        color = focused ? "#F10BF4" : "#ccc";
                }
                return <Text style={{ color: color, fontSize: 12 }}>{label}</Text>;
            },
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#08378D",
            },
            //corrige les incoherences de status bar d'écran 
            unmountOnBlur: true,
        })} >
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="PlanetStack" component={PlanetStack} />
        </Tab.Navigator>
    )
}