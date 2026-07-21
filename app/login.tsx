import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="w-full px-6 pb-12 items-center">
        <Image
          source={require("../assets/logo_2.png")}
          className="w-[200px] h-[200px] mb-1"
          resizeMode="contain"
        />

        <Text className="mb-2 font-bold text-3xl text-center text-gray-500">
          Bienvenido de Nuevo
        </Text>

        <Text className="mb-6 text-sm text-center text-gray-400">
          Ingresa tus datos para iniciar sesión
        </Text>

        

        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className="text-xs font-medium  text-gray-500">
              Correo electrónico
            </Text>
          </View>
          <TextInput
            className="w-full border rounded-2xl p-3.5 text-base text-gray-800 border-gray-300"
            placeholder="ejemplo@correo.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className="text-xs font-medium text-gray-500">
              Contraseña
            </Text>
          </View>

          <View className="relative justify-center w-full">
            <TextInput
              className="w-full border rounded-2xl p-3.5 pr-12 text-base text-gray-800 border-gray-300"
              placeholder="••••••••"
            />

            <TouchableOpacity className="absolute right-4 p-1">
              <Ionicons name={"eye-off-outline"} size={22} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        <Pressable className="w-11/12 py-3 rounded-2xl bg-[#4C5AE0] active:opacity-90">
          <Text className="text-center text-white font-bold text-sm">
            Iniciar Sesión
          </Text>
        </Pressable>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-500 text-sm">¿No tienes cuenta? </Text>
          <Link
            href="/login"
            className="text-blue-500 font-bold text-sm active:opacity-70"
          >
            Regístrate
          </Link>
        </View>
      </View>
    </View>
  );
}
