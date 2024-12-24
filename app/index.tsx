import React from "react";

// React Native
import { Text, View } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-phoneBg text-white">
      <Text className="text-white text-3xl font-pblack">V Play</Text>
      <StatusBar style="auto" />
      <Link  href="/home" style={{ color: "green" , backgroundColor:"white" , paddingBlock:10 , paddingInline:30 , borderRadius:8, marginTop:40  }}>
          Go to Home
      </Link>
    </View>
  );
};

export default Index;
