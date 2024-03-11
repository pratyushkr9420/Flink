import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, Ionicons } from "@expo/vector-icons";

// import Navigators
import MainNavigator from "./MainNavigator";
//

// import Screens
import AuthScreen from "../Screens/AuthScreen";
//

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
