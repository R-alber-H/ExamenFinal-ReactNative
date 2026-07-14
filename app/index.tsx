import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

export default function Index() {
  return (
    <ImageBackground 
      source={require("../assets/fondo_nubes.png")} 
      resizeMode="cover" 
      className="flex-1"
    >
    <SafeAreaView className="flex-1 bg-transparent px-6 justify-between pb-10">
      
      <View className="items-center mt-4">
        <View className="h-24 w-full mt-10 justify-center items-center">
          <Image
            source={require("../assets/mario_shop.png")}
            className="w-full h-full"
            resizeMode="contain" 
          />
        </View>
        <Text className="text-xl font-bold text-gray-500 text-center mt-4 px-2">
          Figuras, peluches y accesorios para verdaderos fans
        </Text>
      </View>

      <View className="flex-1 justify-center items-center my-6">
        <Image
          source={require("../assets/inicio_mario.png")}
          className="w-full h-[95%] max-h-[420px]"
          resizeMode="contain" 
        />
      </View>

      <View className="items-center w-full">
        <Link href="/login" asChild>
          <TouchableOpacity 
            activeOpacity={0.8}
            className="w-full max-w-xs py-4 rounded-full items-center justify-center shadow-md active:bg-yellow-500"
            style={{ backgroundColor: colors.accent }}
          >
            <Text className="text-stone-700 text-center font-black text-lg tracking-wider">
              ¡COMENZAR AVENTURA!
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </SafeAreaView>
    </ImageBackground >
  );
}