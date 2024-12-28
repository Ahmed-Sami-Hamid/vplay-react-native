import React from "react";

// React Native
import { Text, View } from "react-native";

// Expo
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <StatusBar backgroundColor="#17221C" style="light" />
    </Stack>
  );
};

export default AuthLayout;
