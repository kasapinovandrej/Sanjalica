import SplashScreenView from "@/components/SplashScreenView";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";

const RootLayout = () => {
  const [loaded] = useFonts({
    SourGummy: require("../assets/fonts/SourGummy_SemiExpanded-Regular.ttf"),
    Dyna: require("../assets/fonts/DynaPuff-VariableFont_wdth,wght.ttf"),
    Space: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [isShowSplashScreen, setIsSHowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSHowSplashScreen(false);
    }, 2000);
  }, []);

  if (isShowSplashScreen) {
    return <SplashScreenView loaded={loaded} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
