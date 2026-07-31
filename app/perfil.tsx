import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";

export default function Perfil() {
  const { usuarioActual, logout } = useAuth();

  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ paddingBottom: 40 }}>
  
      <View className="flex-row items-center justify-between px-6 pt-12 pb-4 bg-white ">
        <Link href="/home" asChild>
          <TouchableOpacity className="p-2.5 bg-slate-50 rounded-full border border-slate-200">
            <Ionicons name="arrow-back-outline" size={20} color="#0f172a" />
          </TouchableOpacity>
        </Link>

        <Text className="text-lg font-bold text-slate-800">Mi Perfil</Text>

        <TouchableOpacity 
          className="p-2.5 bg-red-50 rounded-full border border-red-100" 
          onPress={logout}
        >
          <Ionicons name="exit-outline" size={20} color="#ef4444" />
        </TouchableOpacity>
      </View>

      <View className="items-center px-6 pt-6 pb-6 bg-white mb-4">

        <View className="relative mb-3 shadow-md">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-36 h-36 rounded-full border-4 border-white"
            resizeMode="cover"
          />
        </View>

        <Text className="text-2xl font-bold text-slate-900 mt-1">
          {usuarioActual?.name || "Usuario"}
        </Text>
        <Text className="text-sm text-slate-500 mb-3">
          {usuarioActual?.email || "correo@example.com"}
        </Text>

        <View className="bg-orange-50 border border-orange-100 px-4 py-2.5 rounded-2xl w-full max-w-xs">
          <Text className="text-xs text-center text-orange-700 font-medium italic">
            "El Camino ninja es nunca rendirse"
          </Text>
        </View>
      </View>

      <View className="px-6">
  <Text className="text-base font-bold text-slate-800 mb-3">
    Funkos Favoritos
  </Text>

  <View className="flex-row flex-wrap gap-4">
    
    <View className="w-[48%] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm items-center mb-2">
      <Image
        source={require("../assets/funkoKakashi.png")}
        className="w-full h-32 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xs font-semibold text-slate-700">Kakashi Hatake</Text>
    </View>

    <View className="w-[48%] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm items-center mb-2">
      <Image
        source={require("../assets/funkoItachi.png")}
        className="w-full h-32 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xs font-semibold text-slate-700">Itachi Uchiha</Text>
    </View>

    <View className="w-[48%] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm items-center mb-2">
      <Image
        source={require("../assets/funkoKakashi.png")}
        className="w-full h-32 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xs font-semibold text-slate-700">Kakashi Hatake</Text>
    </View>

    <View className="w-[48%] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm items-center mb-2">
      <Image
        source={require("../assets/funkoItachi.png")}
        className="w-full h-32 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xs font-semibold text-slate-700">Itachi Uchiha</Text>
    </View>

  </View>
</View>
    </ScrollView>
  );
}