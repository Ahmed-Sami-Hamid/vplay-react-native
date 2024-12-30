import React from "react";
import {
  TextInputProps,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { TextInput } from "react-native-paper";

import { icons } from "../constants";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  addStyle?: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
  addStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [text, setText] = React.useState("");

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-5">{title}</Text>

      <View className={`${addStyle}`}>
        <TextInput
          className=" w-full h-16 px-4 bg-black-100 border-2 border-black-200 focus:border-secondary flex flex-row items-center"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          textColor="#ffffff"
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="flex justify-end items-end"
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
