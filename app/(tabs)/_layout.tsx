import { Colors } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Jesmonit",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="j" color={color} />
          ),
          headerStyle: { backgroundColor: Colors.light.text },
          tabBarStyle: { backgroundColor: Colors.light.text },
          headerTintColor: Colors.dark.text,
          tabBarActiveTintColor: Colors.dark.text,
          headerTitleStyle: { fontFamily: "SourGummy", fontSize: 35 },
        }}
      />
      <Tabs.Screen
        name="candles"
        options={{
          title: "Sveće",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="candle" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: Colors.light.text },
          tabBarStyle: { backgroundColor: Colors.light.text },
          headerTintColor: Colors.dark.text,
          tabBarActiveTintColor: Colors.dark.text,
          headerTitleStyle: { fontFamily: "SourGummy", fontSize: 35 },
        }}
      />
    </Tabs>
  );
};

export default _layout;
