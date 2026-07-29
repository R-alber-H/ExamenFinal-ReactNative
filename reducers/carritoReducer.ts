import { Producto } from '../domain/entities/producto';

export type ProductoAction =
  | { type: 'AGREGAR'; payload: Producto }
  | { type: 'LIMPIAR' }
  | { type: 'ELIMINAR'; payload: string };

export function carritoReducer(state: Producto[], action: ProductoAction): Producto[] {
  switch (action.type) {
    case 'AGREGAR':
     
      return [...state, action.payload];

    case 'ELIMINAR':
      
      return state.filter((producto)=> producto.id !== action.payload);
    
    case 'LIMPIAR':
      return []

    default:
      return state;
  }
}