import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base text-secondary-200 ml-2 font-pmedium">{title}</Text>

      <View className="w-full h-12 px-4 bg-white rounded-xl border-2 border-secondary focus:border-secondary-100 flex flex-row items-center">
        <TextInput
          className="flex-1 text-secondary-200 font-pregular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#adc4b1"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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

export default FormField;
