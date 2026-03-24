import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DashboardScreen from "../screens/DashboardScreen";
import MovementsScreen from "../screens/MovementsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeTabsNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0f3460",
          borderTopColor: "#16213e",

          // 👇 CLAVE: respetamos la zona segura de Android
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
        tabBarActiveTintColor: "#4f8ef7",
        tabBarInactiveTintColor: "#a0a0b0",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName ="home";
          } else if (route.name === "Movements"){
            iconName ="list";
          } else if (route.name === "Profile"){
            iconName ="person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 4,
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarLabel: "Inicio" }}
      />

      <Tab.Screen
        name="Movements"
        component={MovementsScreen}
        options={{ tabBarLabel: "Movimientos" }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Perfil" }}
      />

    </Tab.Navigator>
  );
};

export default HomeTabsNavigator;