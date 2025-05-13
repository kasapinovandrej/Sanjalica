import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "../assets/images/SanjalicaLogo.png";
import Title from "./ui/Title";

const SplashScreenView = ({ loaded }: { loaded: boolean }) => {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.image} />
      {loaded && (
        <View style={styles.textBox}>
          <Text style={[styles.text, { fontSize: 16 }]}>by</Text>
          <Title style={styles.text}>Katarina Milošević</Title>
        </View>
      )}
    </View>
  );
};

export default SplashScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.text,
  },
  textBox: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: "cover",
  },
  text: {
    fontSize: 30,
    color: Colors.dark.text,
  },
});
