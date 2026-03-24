import React from "react";

// NavigationContainer es el contenedor raíz de toda la navegación
// Debe envolver TODA la app — sin esto nada funciona
// Es como el "router" en una app web
import { NavigationContainer } from "@react-navigation/native";

// createNativeStackNavigator crea un navegador tipo pila (stack)
// "Pila" significa que las pantallas se apilan una encima de otra
// igual que una pila de cartas — puedes agregar y quitar de arriba
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importamos nuestras tres pantallas
// Cada import trae el componente que creamos antes
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

import HomeTabsNavigator from './HomeTabsNavigator';


// Creamos el Stack — esto nos da dos cosas:
// Stack.Navigator = el contenedor de las pantallas
// Stack.Screen    = cada pantalla individual
const Stack = createNativeStackNavigator();

// Definimos el componente AppNavigator
const AppNavigator = () => {
    return (
        // NavigationContainer envuelve todo — va aquí adentro
        <NavigationContainer>

            {/* Stack.Navigator agrupa todas las pantallas */}
            {/* initialRouteName define cuál pantalla se muestra primero */}
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    // Estas opciones aplican a todas las pantallas del stack
                    headerStyle: {backgroundColor: '#1a1a2e'},  // color del header
                    headerTintColor: '#ffffff',     // color del texto y flecha del header
                    headerTitleStyle: {fontWeight: 'bold' },
                    // contentStyle define el fondo de cada pantalla
                    contentStyle: {backgroundColor: '#1a1a2e'},
                }}
            >
                {/* Cada Stack.Screen registra una pantalla en el navegador */}
                {/* name = el nombre con el que navegamos: navigation.navigate('Welcome') */}
                {/* component = el componente que se muestra */}
                
            <Stack.Screen 
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{title: "Iniciar sesión" }}
            />
            <Stack.Screen 
                name="Home"
                component={HomeTabsNavigator}
                options={{
                    headerShown: false,         // el tab no necesita header
                    headerBackVisible: false,   // no volver al login
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;