import { ScrollView, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { FormField } from "../../components";

const signIn = () => {
  const [form, setForm] = useState({
    email:"",
    password:"",
  });
  return (
    <SafeAreaView className="bg-secondary-100 h-full flex justify-center">
      <ScrollView>
          <View className="h-full w-full px-4 flex items-center">
            <Text className="text-primary text-3xl font-pextrabold">Smart Laundry</Text>
            <View className="flex h-full w-full items-start px-5 mt-7 bg-secondary rounded-lg">
              <Text className="font-bold font-2xl mt-3">Sign In</Text>
              <FormField
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-2"
            keyboardType="email-address"
          />
          <FormField
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
          />
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn

const styles = StyleSheet.create({})