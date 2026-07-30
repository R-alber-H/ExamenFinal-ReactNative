import CardCarrito from "@/components/card_carrito";
import { FlatList, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useCarrito } from "@/context/CarritoContext";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Carrito() {
  const { productos, eliminar, limpiarCarrito } = useCarrito();

  const total = productos.reduce((acc, item) => acc + item.precio, 0);
  
  const vaciarCarrito = () => {
    limpiarCarrito();
    Alert.alert(
      "¡Compra exitosa!",
      "Tu pedido ha sido procesado correctamente.",
      [
        {
          text: "Aceptar",
        }
      ]
    );
  };

  return (
    <View className="flex-1 px-4 bg-white pt-4">
      <View className="flex-row items-center mt-6 ">
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

      <View className="px-4 pt-4 pb-2">
        <Text className="text-2xl font-extrabold text-slate-800">
          Mi Carrito
        </Text>
        <Text className="text-slate-500 text-sm">
          {productos.length} {productos.length === 1 ? "artículo" : "artículos"}{" "}
          en total
        </Text>
      </View>

      <View className="flex-1 px-4">
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardCarrito producto={item} onEliminar={eliminar} />
          )}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center py-20 px-6">
              <View className="w-20 h-20 bg-slate-200 rounded-full items-center justify-center mb-4">
                <Ionicons name="cart-outline" size={40} color="#94a3b8" />
              </View>
              <Text className="text-slate-800 text-lg font-bold mb-1 text-center">
                Tu carrito está vacío
              </Text>
              <Text className="text-slate-400 text-sm text-center mb-6">
                No tienes ningún Funko seleccionado para comprar.
              </Text>
              <Link href="/home" asChild>
                <TouchableOpacity className="bg-[#4C5AE0] px-6 py-3 rounded-xl active:opacity-90">
                  <Text className="text-white font-bold text-base">
                    Explorar Funkos
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 8 }}
        />
      </View>

      {productos.length > 0 && (
        <View className="bg-white px-6 pt-5 pb-8 rounded-t-3xl shadow-lg border-t border-slate-100">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-slate-600 text-base font-medium">
              Total a pagar
            </Text>
            <Text className="text-[#4C5AE0] text-2xl font-black">
              ${total.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            className="w-full py-4 rounded-2xl bg-[#4C5AE0] active:opacity-90 mb-8 items-center justify-center"
            onPress={vaciarCarrito}
          >
            <Text className="text-white text-center font-bold text-lg tracking-wide">
              Finalizar Compra
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
