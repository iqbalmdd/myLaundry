import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField } from "../../components";

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-secondary-100 h-full">
      {/* <ScrollView> */}
        <View className="h-full w-full flex items-start ">
          <View>
          <Text className="text-white text-3xl font-pextrabold ml-5 mt-7">
            Welcome!
          </Text>
          <Text className="text-white text-3xl font-pextrabold ml-5">
            Smart Laundry
          </Text>
          </View>
          <View className="flex h-full w-full items-start px-5 mt-20 bg-white rounded-3xl">
            <Text className="font-bold font-2xl mt-3">Sign In</Text>
            <FormField
              placeholder="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
            <FormField
              placeholder="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <View className="flex items-center w-full h-12 my-5">
              <TouchableOpacity className="bg-secondary-200 w-full rounded-xl h-full flex items-center justify-center">
                <Text className="text-white font-bold">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default signIn;