import { Producto } from "@/data/productos";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";

interface CardCarritoProps {
  producto: Producto;
  onEliminar?: () => void;
}

export default function CardCarrito({ producto, onEliminar }: CardCarritoProps) {
  return (
    <View className="flex-row items-center justify-between border border-slate-200 rounded-2xl p-4 bg-white shadow-sm mb-3">

      <View className="w-24 h-24 bg-slate-50 rounded-xl p-2 items-center justify-center border border-slate-100">
        <Image
          source={producto.imagen}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 pr-3 justify-between">
        <Text className="text-slate-800 font-bold text-sm" numberOfLines={2}>
          {producto.nombre}
        </Text>
        <Text className="text-slate-900 font-extrabold text-base my-1">
          {`$ ${producto.precio.toFixed(2)}`}
        </Text>

        <TouchableOpacity
          onPress={onEliminar}
          className="bg-red-50 py-1.5 px-3 rounded-xl flex-row items-center self-start border border-red-100 active:opacity-80"
        >
          <MaterialCommunityIcons name="trash-can-outline" size={16} color="#ef4444" />
          <Text className="text-red-500 font-bold text-xs ml-1">Eliminar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}