import BannerCategoria from "@/components/banner_categoria";
import { CardProductoColumna } from "@/components/CardProductoColumna";
import { ProductosTienda } from "@/data/productos_naruto"; 
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Categoria() {
  // Capturamos el parámetro enviado desde el Link
  const { categoriaNombre } = useLocalSearchParams();

  const nombreCategoria = Array.isArray(categoriaNombre) 
    ? categoriaNombre[0] 
    : (categoriaNombre || "Categoría");

  const productosFiltrados = ProductosTienda.filter(
    (item) => item.categoria.toLowerCase() === nombreCategoria.toLowerCase()
  );

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

      <BannerCategoria nombre={nombreCategoria} />

      <Text className="px-2 text-lg font-bold my-2">
        {categoriaNombre ? `Productos de ${categoriaNombre}` : "Productos Destacados"}
      </Text>

      <View className="flex-1">
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperClassName="justify-between"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProductoColumna producto={item} />
          )}
          ListEmptyComponent={() => (
            <View className="w-full items-center py-10">
              <Text className="text-slate-400 text-base">No se encontraron productos para esta categoría.</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 8 }}
        />
      </View>
    </View>
  );
}