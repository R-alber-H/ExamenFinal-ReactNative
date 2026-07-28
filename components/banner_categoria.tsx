
import { ImageBackground, View, Text, Image } from "react-native";

export default function BannerCategoria({nombre}:{nombre:string}) {
  return (
    <ImageBackground
      source={require("../assets/fondo_banner_categoria.png")}
      resizeMode="cover"
      className="w-full h-48 rounded-2xl overflow-hidden justify-center px-4 my-4"
    >
      <View className="flex-row items-center justify-between w-full">

        <View className="flex-1 pr-2">
          <Text className="text-2xl ml-4 font-bold text-white tracking-wide ">
            Coleccion
          </Text>
          <Text className="text-2xl ml-4 font-bold text-white tracking-wide ">
            {nombre}
          </Text>
          <Text className="text-lg ml-4 font-semibold text-white tracking-wide mt-1">
            Premium
          </Text>
        </View>

        <View className="w-48 h-45 justify-center items-center">
          <Image
            source={require("../assets/naruto_categoria.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>

      </View>
    </ImageBackground>
  )
}