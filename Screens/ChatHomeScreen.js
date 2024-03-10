import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatHomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => navigation.navigate("ChatSettings")}>
        <Text style={{ fontFamily: "black", fontSize: 25 }}>
          Chat Home Screen
        </Text>
      </Pressable>
    </View>
  );
};

export default ChatHomeScreen;

const styles = StyleSheet.create({});
