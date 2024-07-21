import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField } from "../../components";

const signIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  return (
    // <SafeAreaView className="bg-white">
      <ScrollView className="bg-secondary-100 w-full">
        <View className="h-full w-full flex items-center ">
          <View className="mt-10 ml-3 items-center">
            <Text className="text-white text-3xl font-pextrabold">
              Welcome Back!
            </Text>
            <Text className="text-white text-lg font-psemibold -mt-1">
              Smart Laundry
            </Text>
          </View>
          <View className="flex h-full w-full items-center px-5 mt-10 bg-white shadow-md shadow-black-200 rounded-3xl">
            <FormField
              title="Email"
              placeholder="yourmail@example.com"
              value={signInForm.email}
              handleChangeText={(e) =>
                setSignInForm({ ...signInForm, email: e })
              }
              keyboardType="email-address"
              otherStyles="mt-3"
            />
            <FormField
              title="Password"
              placeholder="Password"
              value={signInForm.password}
              handleChangeText={(e) =>
                setSignInForm({ ...signInForm, password: e })
              }
              otherStyles="mt-2"
            />
            <View className="flex items-center w-full h-14 my-5">
              <TouchableOpacity
                className="bg-secondary-100 shadow shadow-secondary-300 w-full rounded-xl h-full flex items-center justify-center"
                onPress={() => router.push("/home")}
              >
                <Text className="text-white font-bold">Sign In</Text>
              </TouchableOpacity>
            </View>
            <View className="h-64 w-full flex items-end justify-end">
              <Text className="text-gray-500 text-base">
                Don't have account?
              </Text>
              <Link href="/sign-up" className="font-pbold text-secondary-100">
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default signIn;
