import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useEffect, useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Navigator Imports
import AppNavigator from "./navigaton/AppNavigator";
//

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppisLoaded] = useState(false);

  useEffect(() => {
    const fontLoader = async () => {
      try {
        await Font.loadAsync({
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          black: require("./assets/fonts/Roboto-Black.ttf"),
        });
      } catch (error) {
        console.log("Following error occured when loading fonts", error);
      } finally {
        setAppisLoaded(true);
      }
    };
    fontLoader();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
