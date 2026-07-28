import BannerCategoria from "@/components/banner_categoria";
import { CardProductoColumna } from "@/components/CardProductoColumna";
import { ProductosNaruto } from "@/data/productos_naruto";
import { FlatList, View, Text, TouchableOpacity,Image } from "react-native";
import { Link } from "expo-router";

export default function Categoria() {
  return (

    <View className="flex-1 px-4 bg-white pt-4">

      <View className="flex-row items-center mt-4">
        <Link href="/home" asChild>
          <TouchableOpacity className="active:opacity-80">
            <Image
            source={require("../assets/logo_funko_2.png")}
            className="w-40 h-12"
            resizeMode="contain"
          />
          </TouchableOpacity>
        </Link>
      </View>

      <BannerCategoria />

      <Text className="px-2 text-lg font-bold my-2">Productos Destacados</Text>

      <View className="flex-1">
        <FlatList
          data={ProductosNaruto}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperClassName="justify-between"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProductoColumna producto={item} />
          )}
          ListEmptyComponent={() => (
            <View className="w-full items-center py-10">
              <Text className="text-slate-400 text-base">No se encontraron productos.</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 8 }}
        />
      </View>
    </View>
  )
}