import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
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
          <Text className="text-white text-3xl font-pextrabold ml-5 mt-3">
            Welcome!
          </Text>
          <Text className="text-white text-3xl font-pextrabold ml-5">
            Smart Laundry
          </Text>
          </View>
          <View className="flex h-full w-full items-center px-5 mt-10 bg-white rounded-3xl">
            <FormField
              title="Email"
              placeholder="yourmail@example.com"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
              otherStyles="mt-3"
            />
            <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
            />
            <View className="flex items-center w-full h-14 my-5">
              <TouchableOpacity className="bg-secondary-100 w-full rounded-xl h-full flex items-center justify-center" onPress={() => router.push('/home')}>
                <Text className="text-white font-bold">Sign In</Text>
              </TouchableOpacity>
            </View>
            <View className="h-60 w-full flex items-end justify-end">
              <Text className="text-gray-500 text-base">Don't have account?</Text>
              <Link href="/sign-up" className="font-pbold text-secondary-100">Sign Up</Link>
            </View>
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default signIn;