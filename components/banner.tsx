import { ImageBackground, View, Image, Text } from "react-native";

export default function Banner() {
  return (
    <ImageBackground
      source={require("../assets/fondo_banner.png")}
      resizeMode="cover"
      className="w-full h-48 rounded-2xl overflow-hidden justify-center px-4 my-4"
    >
      <View className="flex-row items-center justify-between w-full">
        
        <View className="flex-1 pr-2">
          <Text className="text-2xl font-bold text-white tracking-wide [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
            Funkos Exclusivos
          </Text>
          <Text className="text-sm font-semibold text-white/90 tracking-wide mt-1 [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
            Colecciones Limitadas 
          </Text>
        </View>

        <View className="w-48 h-45 justify-center items-center">
          <Image
            source={require("../assets/funkos_banner.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>

      </View>
    </ImageBackground>
  );
}