import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { pedidoRepository } from '@/infrastructure/repositories/pedidoRepository';
import { Pedido, CrearPedidoDTO } from '@/domain/entities/pedido';

export function usePedido() {
  const db = useSQLiteContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

const cargarPedidos = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await pedidoRepository.listar(db);
      setPedidos(data);
    } catch (e) {
      setError('No se pudieron cargar las pediods.');
    } finally {
      setLoading(false);
    }
  };

  const crearPedido = async (dto: CrearPedidoDTO) => {
    try {
      setLoading(true);
      setError(null);

      await pedidoRepository.crear(db, dto);
      await cargarPedidos();
    } catch (e) {
      setError('No se pudo guardar el pedido.');
    } finally {
      setLoading(false);
    }
  };

  const cambiarEstado = async (pedido: Pedido) => {
    await pedidoRepository.cambiarEstado(db, pedido);
    await cargarPedidos();
  };

  const eliminarPedido = async (id: number) => {
    await pedidoRepository.eliminar(db, id);
    await cargarPedidos();
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

  return {pedidos, loading, error, cargarPedidos, crearPedido, cambiarEstado, eliminarPedido }
}