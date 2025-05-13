import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Typography from "./Typography";

const Input = ({
  name,
  label,
  value,
  setValue,
  keyboardType = "numeric",
}: {
  name: string;
  label: string;
  value: string;
  setValue: (value: React.SetStateAction<string>, name: string) => void;
  keyboardType?: "numeric" | "default";
}) => {
  return (
    <View style={styles.inputContainer}>
      <Typography style={styles.label}>{label}</Typography>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={(e) => setValue(e, name)}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    minWidth: "100%",
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: Colors.light.tint,
  },
  input: {
    backgroundColor: Colors.light.text,
    borderRadius: 20,
    textAlign: "center",
    color: Colors.light.tint,
    height: 50,
    fontSize: 20,
  },
});
