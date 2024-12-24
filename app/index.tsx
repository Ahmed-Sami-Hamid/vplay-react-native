import React from "react";

// React Native
import { Text, View } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Index</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to About
      </Link>
    </View>
  );
};

export default Index;
