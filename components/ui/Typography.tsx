import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

const Typography = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  text: { fontFamily: "Dyna" },
});
