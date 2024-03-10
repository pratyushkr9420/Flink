import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import backGroundImage from "../assets/bg.jpg";
import { Entypo, Feather } from "@expo/vector-icons";
import { colors } from "../Styles/styles";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={backGroundImage}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <Pressable>
          <Entypo name="plus" size={24} color={colors.gray} />
        </Pressable>
        <TextInput
          style={styles.textInputBox}
          placeholder="Type your message here"
        />
        <Pressable>
          <Feather name="camera" size={24} color={colors.gray} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  textInputBox: {
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    height: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: "white",
  },
});
