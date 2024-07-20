import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="bg-secondary h-full flex justify-center">
      <View className="flex justify-center h-auto items-start pl-8">
      <Text className="text-white font-bold text-4xl">The Only</Text>
      <Text className="text-primary font-extrabold text-5xl">Laundry</Text>
      <Text className="text-white font-bold text-4xl">App You Need!</Text>
      </View>
      <View className="flex items-center w-full h-10 my-5">
      <TouchableOpacity className="bg-primary w-5/6 rounded-full h-full flex items-center justify-center" >
        <Text>Sign In</Text>
      </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

