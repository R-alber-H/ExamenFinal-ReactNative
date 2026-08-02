
import { ImageBackground, View, Text, Image } from "react-native";

export default function BannerCategoria({nombre}:{nombre:string}) {
  const fondos: { [key: string]: any } = {
      Naruto: require("../assets/fondo_banner_categoria.png"),
      DragonBall: require("../assets/fondoBannerDZ.png"),
      OnePiece: require("../assets/fondoBannerOnePice.png"),
      Default: require("../assets/logo_funko_2.png") 
    };
  const imagen: { [key: string]: any } = {
      Naruto: require("../assets/naruto_categoria.png"),
      DragonBall: require("../assets/gokuBanner.png"),
      OnePiece: require("../assets/luffyBanner.png"),
      Default: require("../assets/logo_funko_2.png") 
    };
  
  return (
    <ImageBackground
      source={fondos[nombre]}
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
            source={imagen[nombre]}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>

      </View>
    </ImageBackground>
  )
}