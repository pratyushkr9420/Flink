import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatSettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ fontFamily: "black", fontSize: 25 }}>
          Chat Settings Screen
        </Text>
      </Pressable>
    </View>
  );
};

export default ChatSettingsScreen;

const styles = StyleSheet.create({});
