// app/index.tsx
import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-slate-900 px-6">
      <Text className="text-3xl font-bold text-white mb-2">
        ¡NativeWind funciona! 🎉
      </Text>

      <Text className="text-base text-slate-400 mb-8">
        Contador: <Text className="text-emerald-400 font-semibold">{count}</Text>
      </Text>

      <Pressable
        onPress={() => setCount((c) => c + 1)}
        className="bg-emerald-500 active:bg-emerald-600 px-6 py-3 rounded-xl shadow-lg"
      >
        <Text className="text-white font-semibold text-lg">Sumar +1</Text>
      </Pressable>

      <Pressable
        onPress={() => setCount(0)}
        className="mt-3 border border-slate-600 px-6 py-3 rounded-xl"
      >
        <Text className="text-slate-300 font-medium">Reiniciar</Text>
      </Pressable>
    </View>
  );
}