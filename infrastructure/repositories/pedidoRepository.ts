import { SQLiteDatabase } from "expo-sqlite";
import {Pedido,  CrearPedidoDTO } from '../../domain/entities/pedido';

export const pedidoRepository= {

  async listar(db: SQLiteDatabase): Promise<Pedido[]>{
    console.log('[SQL SELECT] Listando pedidos');

    return db.getAllAsync<Pedido>(`
      SELECT id, fecha, total, estado, cantidad_productos
      FROM pedidos
      ORDER BY id DESC;
    `);
  },

  async crear(db: SQLiteDatabase, dto: CrearPedidoDTO): Promise<void>{
    console.log('[SQL INSERT] Creando pedidos');

    await db.runAsync(
    `
    INSERT INTO pedidos ( fecha, total, estado, cantidad_productos)
    VALUES(?, ?, 'PENDIENTE', ?);
    `,
    [new Date().toISOString(),dto.total,dto.cantidad_productos],
    );
  },
  
  async cambiarEstado(db: SQLiteDatabase, pedido: Pedido): Promise<void>{
    const nuevoEstado = pedido.estado  === 'PENDIENTE' ? 'FINALIZADO' : 'PENDIENTE';

    console.log('[SQL UPDATE] Cambiando estado', {
      id: pedido.id,
      nuevoEstado,
    })

    await db.runAsync(
      `
      UPDATE pedidos
      SET estado = ?
      WHERE id = ?;
      `,
      [nuevoEstado, pedido.id]
    );

  },

  async eliminar(db: SQLiteDatabase, id: number): Promise<void>{
    console.log('[SQL DELETE] Eliminando pedido', { id });
    
    await db.runAsync(
      `
      DELETE FROM pedidos
      WHERE id = ?;
      `,
      [id]
    ) 
  }
}