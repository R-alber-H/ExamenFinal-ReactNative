import { createContext, useContext, useReducer, useState } from 'react';
import { authReducer } from '../reducers/authReducer';
import { Usuario, RegistroFormData, LoginFormData } from '../domain/entities/usuario';

interface AuthContextValue {
  usuarioActual: Usuario | null;
  login: (datos: LoginFormData) => boolean;
  registro: (datos: RegistroFormData) => { conExito: boolean; mensaje: string };
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(authReducer, {
    usuarioActual: null,
    usuarios: [
      {
        id: '1',
        name: 'Ricardo Alberco',
        email: 'usuario1@gmail.com',
        phone: '555-0101',
        address: 'Av. Universitaria 123',
        favoriteCategory: 'Naruto',
        password: '123456'
      },
      {
        id: '2',
        name: 'Lucia Sanchez',
        email: 'usuario2@gmail.com',
        phone: '555-0202',
        address: 'Calle Principal 456',
        favoriteCategory: 'One Piece',
        password: '123456'
      }
    ]
  });

  const login = (datos: LoginFormData): boolean => {
    const encontrado = state.usuarios.find(u => u.email === datos.email && u.password === datos.password);
    if (encontrado) {
      dispatch({ type: 'LOGIN', payload: encontrado });
      return true;
    }
    return false;
  };

  const registro = (datos: RegistroFormData) => {
    const existe = state.usuarios.some(u => u.email === datos.email);
    if (existe) {
      return { conExito: false, mensaje: 'El correo electrónico ya está registrado' };
    }

    const nuevoUsuario: Usuario = {
      id: Date.now().toString(),
      phone : "Sin telefono",
      address : "Sin direccion",
      favoriteCategory : "Son categoria",
      ...datos
    };

    dispatch({ type: 'REGISTRO', payload: nuevoUsuario });
    return { conExito: true, mensaje: 'Registro exitoso' };
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ usuarioActual: state.usuarioActual, login, registro, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider');
  }
  return context;
}