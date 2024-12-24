import React from "react";

// Expo
import { Slot, Stack } from "expo-router";

// Css
import "../global.css";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
