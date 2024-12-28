import React, { useState } from "react";

// React Native
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

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
            addStyle="mt-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            addStyle="mt-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center"
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-10"
            textStyles="font-semibold"
            handlePress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
