import { carritoReducer } from '@/reducers/carritoReducer';
import { Producto } from '../domain/entities/producto';
import { createContext, PropsWithChildren, useContext, useReducer } from "react";

interface CarritoContextValue {
    productos: Producto[];
    agregar: (producto: Producto) => void;
    eliminar: (id: string) => void;
}

const CarritoContext = createContext<CarritoContextValue | undefined>(undefined);

export function CarritoProvider({ children }: PropsWithChildren) {

    const [productos, dispatch] = useReducer(carritoReducer, []);

    const agregar = (producto: Producto) => {
        dispatch({ type: 'AGREGAR', payload: producto });
    }

    const eliminar = (id: string) => {
        dispatch({ type: 'ELIMINAR', payload: id })
    }

    return (
        <CarritoContext.Provider value={{ productos, agregar, eliminar }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe utilizarse dentro de CarritoProvider');
  }
  return context;
}