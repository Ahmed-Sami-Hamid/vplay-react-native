import React from "react";

// React Native
import { Text, View, ScrollView, Image } from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

// Context
import { SafeAreaView } from "react-native-safe-area-context";

// Images
import { images } from "../constants";
import { CustomButton } from "../components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView className="bg-phoneBg h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex items-center justify-center h-[94vh] px-4">
          <Image
            source={images.logo}
            className="w-[150px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with <Text className="text-primary">VPlay</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[126px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in ")}
            containerStyles="w-full mt-7 bg-secondary rounded-xl min-h-[62px]"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#17221C" />
    </SafeAreaView>
  );
};

export default Index;
