import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routs";

export function Routes() {
  return(
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}