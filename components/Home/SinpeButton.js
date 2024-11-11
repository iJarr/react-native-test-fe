import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SinpeButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("ContactSelection")}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image
        source={require("../../assets/sinpe-icon.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4C51F7",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  icon: {
    width: 25.27,
    height: 21,
    tintColor: "#4C51F7",
  },
});

export default SinpeButton;
