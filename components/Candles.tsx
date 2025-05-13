import { Colors } from "@/constants/Colors";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Candles = () => {
  return (
    <ImageBackground
      source={require("../assets/images/candle.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.backdrop}></View>
    </ImageBackground>
  );
};

export default Candles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginTop: 10,
  },
  image: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 30,
    color: Colors.light.tint,
  },
  main: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputContainer: {
    marginVertical: 10,
    minWidth: "100%",
  },
  label: { fontSize: 20, marginBottom: 5, color: Colors.light.tint },
  input: {
    backgroundColor: Colors.light.text,
    borderRadius: 20,
    textAlign: "center",
    color: Colors.light.tint,
  },
  form: { width: "80%" },
});
