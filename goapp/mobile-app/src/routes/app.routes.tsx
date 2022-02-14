import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Dash } from "../screens/Dash";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomBar = () => {
  return (
    <Navigator
      defaultScreenOptions={{}}
      screenOptions={{
        tabBarActiveTintColor: "#d53f8c",
        tabBarInactiveTintColor: "#757e76",
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          height: 65,
          backgroundColor: "#28262E",
        },
      }}
    >
      <Screen
        name="List"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Dashboard"
        component={Dash}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
