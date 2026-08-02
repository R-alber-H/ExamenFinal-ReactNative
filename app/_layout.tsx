import { AuthProvider } from "@/context/AuthContext";
import { CarritoProvider } from "@/context/CarritoContext";
import "@/global.css";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { inicializarBaseDatos } from '../infrastructure/database/database';
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <SQLiteProvider databaseName="pedidos.db" onInit={inicializarBaseDatos}>
          <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="registro" />
            <Stack.Screen name="home" />
            <Stack.Screen name="categoria" />
            <Stack.Screen name="carrito" />
            <Stack.Screen name="perfil" />
            <Stack.Screen name="historial" />
          </Stack>
          <Toast />
        </SQLiteProvider>
      </CarritoProvider>
    </AuthProvider>
  );
}