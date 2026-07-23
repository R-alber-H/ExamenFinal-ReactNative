import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/fondo_naruto.png")}
      resizeMode="cover"
      className="flex-1"
    >
      <SafeAreaView className="flex-1 bg-transparent px-6 justify-evenly pb-8">

        <View className="h-[58%] w-full justify-center items-center mt-8 ">
          <Image
            source={require("../assets/naruto_pain.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>

        <View className="w-full items-center gap-y-6">

          <Text className="text-lg font-bold text-white text-center tracking-wide [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)] px-2">
            Encuentra esa pieza clave para completar tu colección
          </Text>

          <Link href="/login" asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full max-w-xs py-4 rounded-full items-center justify-center shadow-lg bg-orange-500 active:bg-orange-600"
            >
              <Text className="text-white text-center font-black text-lg tracking-wider">
                ¡IR A LA TIENDA!
              </Text>
            </TouchableOpacity>
          </Link>

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}