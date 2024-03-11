import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useCallback } from "react";
import backGroundImage from "../assets/bg.jpg";
import { Entypo, Feather } from "@expo/vector-icons";
import { colors } from "../styles/styles";

const ChatScreen = () => {
  const [textMessage, setTextMessage] = useState("");

  const handleTextSubmission = useCallback(() => {
    console.log("Entered text is", textMessage);
    setTextMessage("");
  }, [textMessage]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.chatScreen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={94}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={backGroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Entypo name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            value={textMessage}
            style={styles.textInputBox}
            placeholder="Type your message here"
            onChangeText={(text) => setTextMessage(text)}
            onSubmitEditing={handleTextSubmission}
          />
          {textMessage === "" && (
            <TouchableOpacity>
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}

          {textMessage !== "" && (
            <TouchableOpacity onPress={handleTextSubmission}>
              <Feather name="send" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  textInputBox: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#0585ed",
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
