import React from "react";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme';

// Screens
import Home from '../screens/Home';
import Chamada from "../screens/Chamada";
import Graficos from "../screens/Graficos";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

const bottomBar: React.FC = () => {
    const screenOptions: ScreenOptions = ({ route }) => ({
        
        headerStyle: {
            backgroundColor: 'red'
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            height: 55,
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            justifyContent: "center"
        },
        tabBarIcon: ({ focused, color, size }) => {
            const acceptedIcons = {
                inicio: 'home',
                perfil: 'person',
                graficos: 'pie-chart',
                chamada: 'reader'
            }

            const routeName = route.name.toLowerCase() as keyof typeof acceptedIcons;

            const selectedIcon = acceptedIcons[routeName];

            let iconName = function() {
                if(focused) return selectedIcon;
                else return selectedIcon + '-outline';
            }();

            return <Ionicons name={iconName} color={color} size={size} />;
        }
    });

    return <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Inicio" component={Home}/>
            <Tab.Screen name="Chamada" component={Chamada}/>
            <Tab.Screen name="Graficos" component={Graficos}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
        </Tab.Navigator>
    </NavigationContainer>
}

export default bottomBar;


/* Types */
type ScreenOptions = (props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}) => BottomTabNavigationOptions