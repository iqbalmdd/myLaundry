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
const signUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    address: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  return (
    // <SafeAreaView className="bg-white h-full">
      <ScrollView className="bg-secondary-100 w-full">
        <View className="h-full w-full flex items-start ">
          <View className="mt-10 ml-5">
            <Text className="text-white text-3xl font-pextrabold">
              Create
            </Text>
            <Text className="text-white text-3xl font-pextrabold">
              Your Account
            </Text>
          </View>
          <View className="flex h-full w-full items-center px-5 mt-10 bg-white rounded-3xl">
            <FormField
              title="Name"
              placeholder="John Doe"
              value={signUpForm.name}
              handleChangeText={(e) =>
                setSignUpForm({ ...signUpForm, name: e })
              }
              otherStyles="mt-3"
            />
            <FormField
              title="Address"
              placeholder="Melati 59, Ragunan, South Jakarta"
              value={signUpForm.address}
              handleChangeText={(e) =>
                setSignUpForm({ ...signUpForm, address: e })
              }
              otherStyles="mt-3"
            />
            <FormField
              title="Phone No"
              placeholder="081234567890"
              value={signUpForm.phoneNo}
              handleChangeText={(e) =>
                setSignUpForm({ ...signUpForm, phoneNo: e })
              }
              keyboardType="phone-pad"
              otherStyles="mt-3"
            />
            <FormField
              title="Email"
              placeholder="yourmail@example.com"
              value={signUpForm.email}
              handleChangeText={(e) =>
                setSignUpForm({ ...signUpForm, email: e })
              }
              keyboardType="email-address"
              otherStyles="mt-2"
            />
            <FormField
              title="Password"
              placeholder="Password"
              value={signUpForm.password}
              handleChangeText={(e) =>
                setSignUpForm({ ...signUpForm, password: e })
              }
              otherStyles="mt-2"
            />
            <View className="flex items-center w-full h-14 my-5">
              <TouchableOpacity
                className="bg-secondary-100 w-full rounded-xl h-full flex items-center justify-center"
                onPress={() => router.push("/home")}
              >
                <Text className="text-white font-bold">Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full flex items-end justify-end mb-8">
              <Text className="text-gray-500 text-base">
                Already have account?
              </Text>
              <Link href="/sign-in" className="font-pbold text-secondary-100">
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default signUp;
