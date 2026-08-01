import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePedido } from '../hooks/usePedido'; 
import { Pedido } from '../domain/entities/pedido';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Historial() {
  const { pedidos, loading, error, cambiarEstado, eliminarPedido } = usePedido();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-2">

        <View className="flex-row items-center justify-between px-6 pt-12 pb-4 bg-white ">
        <Link href="/perfil" asChild>
          <TouchableOpacity className="p-2.5 bg-slate-50 rounded-full border border-slate-200">
            <Ionicons name="arrow-back-outline" size={20} color="#0f172a" />
          </TouchableOpacity>
        </Link>

        <Text className="text-lg font-bold text-slate-800">Mi Historial</Text>
        <View></View>
      </View>

        <Text className="mt-1 text-slate-500 px-5 text-sm">
          Revisa el estado de tus compras de Funkos guardadas localmente.
        </Text>

        {error && (
          <View className="mt-4 rounded-2xl bg-red-100 p-4">
            <Text className="text-red-700 text-center font-medium">{error}</Text>
          </View>
        )}

        <FlatList
          data={pedidos}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingVertical: 20, paddingBottom: 24 }}
          refreshing={loading}
          renderItem={({ item }) => (
            <View className="mb-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <View className="flex-row items-center justify-between">
                <Text className="font-bold text-slate-900 text-base">
                  Pedido #{item.id}
                </Text>
                <View 
                  className={`px-3 py-1 rounded-full ${
                    item.estado === 'FINALIZADO' ? 'bg-green-100' : 'bg-amber-100'
                  }`}
                >
                  <Text className={`text-xs font-bold ${
                    item.estado === 'FINALIZADO' ? 'text-green-700' : 'text-amber-700'
                  }`}>
                    {item.estado}
                  </Text>
                </View>
              </View>

              <View className="my-3 border-t border-slate-100" />

              <View className="space-y-1">
                <Text className="text-slate-500 text-sm">
                  Fecha: <Text className="font-semibold text-slate-700">{new Date(item.fecha).toLocaleDateString()}</Text>
                </Text>
                <Text className="text-slate-500 text-sm">
                  Productos: <Text className="font-semibold text-slate-700">{item.cantidad_productos} ítems</Text>
                </Text>
                <Text className="text-slate-500 text-sm">
                  Total: <Text className="font-bold text-indigo-600">${item.total.toFixed(2)}</Text>
                </Text>
              </View>

              <View className="mt-4 flex-row justify-end space-x-2">
                <TouchableOpacity
                  onPress={() => cambiarEstado(item)}
                  className="rounded-xl bg-slate-100 px-4 py-2"
                >
                  <Text className="text-xs font-bold text-slate-700">Cambiar Estado</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => eliminarPedido(item.id)}
                  className="rounded-xl bg-red-50 px-4 py-2"
                >
                  <Text className="text-xs font-bold text-red-600">Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View className="mt-12 items-center">
              <Text className="text-center text-slate-400">
                Todavía no hay pedidos registrados en el historial.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}