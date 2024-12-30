import React, { useState } from "react";

// React Native
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Vibration,
  Button,
} from "react-native";

// Images
import { images } from "../../constants";

// Components
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];
  return (
    <SafeAreaView className="h-full bg-phoneBg">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px] mt-16"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to VPlay
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-10"
            textStyles="font-semibold"
            handlePress={() => {}}
          />

          <Button
            title="Vibrate once"
            onPress={() => Vibration.vibrate(PATTERN)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
