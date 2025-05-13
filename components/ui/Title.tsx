import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

const Title = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: { fontFamily: "SourGummy" },
});
