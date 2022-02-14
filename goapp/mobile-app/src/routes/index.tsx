import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserStackRoutes } from "./user.stack.routes";
// import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer independent={true}>
      <UserStackRoutes />
    </NavigationContainer>
  );
};
