import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "black", fontSize: 25 }}>Auth Screen</Text>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
