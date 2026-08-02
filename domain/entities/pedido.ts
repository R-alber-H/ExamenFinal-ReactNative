export type Estado = 'PENDIENTE' | 'FINALIZADO';

export type Pedido = {
    id: number;
    fecha: string;
    total: number;
    estado: Estado;
    cantidad_productos: number;
};

export type CrearPedidoDTO = {
    total: number;
    cantidad_productos: number;
}
