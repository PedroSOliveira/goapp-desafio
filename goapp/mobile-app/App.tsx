import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { UserStackRoutes } from "./src/routes/user.stack.routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#28262E" barStyle="light-content" />
      <NavigationContainer>
        <UserStackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
