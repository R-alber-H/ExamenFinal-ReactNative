import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Producto } from '@/data/productos';

export function CardProducto({ producto }: { producto: Producto }) {
  return (
    // Usamos w-40 para que quepan varias tarjetas en pantalla
    <View className="border border-slate-200 rounded-3xl w-40 p-3 justify-between bg-white shadow-sm">
      <Image
        source={producto.imagen}
        className="w-full h-28 rounded-2xl mb-2"
        resizeMode="contain"
      />

      <View className="flex-1 justify-between">
        <Text className="text-slate-800 font-semibold text-sm" numberOfLines={2}>
          {producto.nombre}
        </Text>
        <Text className="text-[#9a9ba1] font-bold text-base mt-1">
          {`$ ${producto.precio}`}
        </Text>
      </View>

      <TouchableOpacity className="bg-[#4C5AE0] py-2 rounded-xl mt-3 flex-row items-center justify-center active:opacity-90">
        <MaterialCommunityIcons name="plus" size={16} color="#ffffff" />
        <Text className="text-white font-bold text-xs ml-1">Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}