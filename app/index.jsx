import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-secondary-100 h-full flex justify-center">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
      <View className="flex w-full h-full justify-end pb-40">
        <View className="flex justify-center h-auto items-start pl-8">
          <Text className="text-white font-bold text-4xl">
            Your
            <Text className="text-primary font-extrabold"> Laundry</Text>
          </Text>
          <Text className="text-white font-extrabold text-5xl">
            Simplified.
          </Text>
        </View>
        <View className="flex items-center w-full h-12 my-5">
          <TouchableOpacity 
          className="bg-primary w-11/12 rounded-full h-full flex items-start justify-center"
          onPress={() => router.push("/sign-in")}
          >
            <Text className="text-secondary-200 font-bold text-xl ml-4">Get Started!</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Welcome;
