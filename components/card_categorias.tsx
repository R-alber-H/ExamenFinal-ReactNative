import { View, Image, Text, TouchableOpacity } from "react-native";

const COLOR_MAP: Record<string, string> = {
  orange: 'bg-orange-400 border-orange-200',
  blue: 'bg-amber-400 border-amber-200',
  red: 'bg-red-400 border-red-200',
  emerald: 'bg-emerald-400 border-emerald-200',
};

export default function CardCategoria({ data }: any) {

  const className = COLOR_MAP[data.color] ?? 'bg-slate-500 border-slate-400';

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      style={{ width: 120 }}
      className={`rounded-2xl p-3 shadow-sm border justify-between overflow-hidden ${className}`}
    >
      <View className="rounded-xl p-2 mb-2 items-center justify-center">
        <Image
          source={data.imagen}
          className="w-full h-16"
          resizeMode="contain"
        />
      </View>

      <View>
        <Text className="text-white font-bold text-sm tracking-wide text-center" numberOfLines={1}>
          {data?.nombre || "Categoría"}
        </Text>
        <Text className="text-white/80 text-[10px] font-medium mt-0.5 text-center">
          Ver colección 
        </Text>
      </View>
    </TouchableOpacity>
  );
}