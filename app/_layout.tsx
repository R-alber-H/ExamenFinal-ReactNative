import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "slide_from_right", }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="registro" />
        <Stack.Screen name="home" />
        <Stack.Screen name="categoria" />
        <Stack.Screen name="carrito" />
      </Stack>
    </>
  );
}
