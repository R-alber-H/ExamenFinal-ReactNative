import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { obtenerPokemonAleatorio } from "@/services/pokemonService";

export default function Perfil() {
  const { usuarioActual, logout } = useAuth();
  const [pokemonInfo, setPokemonInfo] = useState({ content: '', author: '', image: '' });
  const [loading, setLoading] = useState(true);

  const cargarPokemon = async () => {
    setLoading(true);
    const resultado = await obtenerPokemonAleatorio();
    setPokemonInfo(resultado);
    setLoading(false);
  };

  useEffect(() => {
    cargarPokemon();
  }, []);

  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ paddingBottom: 40 }}>
  
      <View className="flex-row items-center justify-between px-6 pt-12 pb-4 bg-white">
        <Link href="/home" asChild>
          <TouchableOpacity className="p-2.5 bg-white rounded-full border border-slate-100">
            <Ionicons name="arrow-back-outline" size={20} color="#0f172a" />
          </TouchableOpacity>
        </Link>

        <Text className="text-lg font-bold text-slate-800">Mi Perfil</Text>
        
        <Link href="/historial" asChild> 
        <TouchableOpacity 
          className="p-2.5 bg-white rounded-full border border-slate-100" 
        >
          <Ionicons name="document-text-outline" size={20} color="#0f172a" />
        </TouchableOpacity>
        </Link>
        
      </View>

      <View className="items-center px-6 pt-6 pb-6 bg-white mb-4">

        <View className="relative mb-3 shadow-md">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-32 h-32 rounded-full border-4 border-white"
            resizeMode="cover"
          />
        </View>

        <Text className="text-2xl font-bold text-slate-900 mt-1">
          {usuarioActual?.name || "Usuario"}
        </Text>
        <Text className="text-sm text-slate-500 mb-3">
          {usuarioActual?.email || "correo@example.com"}
        </Text>

       <View className="bg-orange-50 border border-orange-100 px-4 py-4 rounded-2xl w-full max-w-xs items-center justify-center">
        {loading ? (
          <ActivityIndicator size="small" color="#c2410c" />
        ) : (
          <>
            {pokemonInfo.image ? (
              <Image
                source={{ uri: pokemonInfo.image }}
                className="w-24 h-24 "
                resizeMode="contain"
              />
            ) : null}

            <Text className="text-xs text-center text-orange-700 font-bold italic mb-1">
              {pokemonInfo.content}
            </Text>
            <Text className="text-[10px] text-center text-orange-500 font-medium mt-1">
              - {pokemonInfo.author}
            </Text>
            <TouchableOpacity 
              onPress={cargarPokemon}
              className="mt-3 bg-orange-500 px-4 py-2 rounded-xl"
            >
              <Text className="text-white text-xs font-bold">Cambiar Pokémon</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      </View>

      <View className="px-6">
  <Text className="text-base font-bold text-slate-800 mb-6">
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

    {/* <View className="w-[48%] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm items-center mb-2">
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
    </View> */}

  </View>
</View>
    </ScrollView>
  );
}