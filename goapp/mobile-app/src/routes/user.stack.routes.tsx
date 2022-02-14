import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Dash } from "../screens/Dash";
import { User } from "../screens/User";
import { BottomBar } from "./app.routes";
import { SplashScreen } from "../screens/Splash";

const { Navigator, Screen } = createNativeStackNavigator();

export const UserStackRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName="splash">
            <Screen name="home" component={BottomBar}/>
            <Screen name="user" component={User}/>
            <Screen name="splash" component={SplashScreen}/>
        </Navigator>
    )
}