import { carritoReducer } from '@/reducers/carritoReducer';
import { Producto } from '../domain/entities/producto';
import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { Alert } from 'react-native';

interface CarritoContextValue {
    productos: Producto[];
    agregar: (producto: Producto) => void;
    eliminar: (id: string) => void;
    limpiarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextValue | undefined>(undefined);

export function CarritoProvider({ children }: PropsWithChildren) {

    const [productos, dispatch] = useReducer(carritoReducer, []);

    const agregar = (producto: Producto) => {
        dispatch({ type: 'AGREGAR', payload: producto });
        Alert.alert("Producto Agregado")
    }

    const eliminar = (id: string) => {
        dispatch({ type: 'ELIMINAR', payload: id })
    }
    const limpiarCarrito = () => {
        dispatch({ type: 'LIMPIAR' });
    };

    return (
        <CarritoContext.Provider value={{ productos, agregar, eliminar,limpiarCarrito }}>
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