import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import CardCategoria from "@/components/card_categorias";
import { DATA_CATEGORIAS } from "@/data/categorias";
import Banner from "@/components/banner";
import { CardProducto } from "@/components/card_productos";
import { Productos } from "@/data/productos";


export default function Home() {
  const logueado = true;

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="pt-2" showsVerticalScrollIndicator={false}>

        <View className="flex-row items-center justify-between mb-4 px-4 mt-2">
          <Image
            source={require("../assets/logo_funko_2.png")}
            className="w-40 h-12"
            resizeMode="contain"
          />

          {logueado ? (
            <View className="flex-row items-center gap-3">
              <TouchableOpacity className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                <Ionicons name="person-outline" size={20} color="#0f172a" />
              </TouchableOpacity>

              <TouchableOpacity className="p-2 bg-white rounded-full shadow-sm border border-slate-100 relative">
                <Ionicons name="cart-outline" size={20} color="#0f172a" />
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                  <Text className="text-[10px] text-white font-bold">2</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity className="bg-slate-900 px-4 py-2 rounded-xl">
              <Text className="text-white font-medium text-sm">Ingresar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View className="flex-row items-center px-4 py-3 mx-4 mb-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
          <Ionicons name="search-outline" size={20} color="#94a3b8" />
          <TextInput
            placeholder="Buscar Funkos, categorías..."
            placeholderTextColor="#94a3b8"
            className="text-slate-800 flex-1 text-base ml-2 p-0"
          />
        </View>

        <Text className="text-lg font-bold text-slate-800 mb-3 px-6">Categorías</Text>

        <FlatList
          data={DATA_CATEGORIAS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardCategoria data={item} />}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          className="mb-2"
        />

        <View className="px-4">
          <Banner></Banner>
        </View>

        <Text className="text-lg font-bold text-slate-800 mb-3 px-6">Productos Exclusivos</Text>

        <FlatList
          data={Productos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardProducto producto={item} />}
          ListEmptyComponent={() => (
            <View className="w-full items-center py-10">
              <Text className="text-slate-400 text-base">No se encontraron productos.</Text>
            </View>
          )}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          className="mb-4"
        />

      </ScrollView>
    </SafeAreaView>
  );
}