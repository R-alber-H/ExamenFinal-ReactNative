// import { createContext, useContext, useReducer, useState } from 'react';
// import { authReducer } from '../reducers/authReducer';
// import { Usuario, RegistroFormData, LoginFormData } from '../domain/entities/usuario';

// interface AuthContextValue {
//   usuarioActual: Usuario | null;
//   login: (datos: LoginFormData) => boolean;
//   registro: (datos: RegistroFormData) => { conExito: boolean; mensaje: string };
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {

//   const [state, dispatch] = useReducer(authReducer, {
//     usuarioActual: null,
//     usuarios: [
//       {
//         id: '1',
//         name: 'Ricardo Alberco',
//         email: 'usuario1@gmail.com',
//         phone: '555-0101',
//         address: 'Av. Universitaria 123',
//         favoriteCategory: 'Naruto',
//         password: '123456'
//       },
//       {
//         id: '2',
//         name: 'Lucia Sanchez',
//         email: 'usuario2@gmail.com',
//         phone: '555-0202',
//         address: 'Calle Principal 456',
//         favoriteCategory: 'One Piece',
//         password: '123456'
//       }
//     ]
//   });

//   const login = (datos: LoginFormData): boolean => {
//     const encontrado = state.usuarios.find(u => u.email === datos.email && u.password === datos.password);
//     if (encontrado) {
//       dispatch({ type: 'LOGIN', payload: encontrado });
//       return true;
//     }
//     return false;
//   };

//   const registro = (datos: RegistroFormData) => {
//     const existe = state.usuarios.some(u => u.email === datos.email);
//     if (existe) {
//       return { conExito: false, mensaje: 'El correo electrónico ya está registrado' };
//     }

//     const nuevoUsuario: Usuario = {
//       id: Date.now().toString(),
//       phone : "Sin telefono",
//       address : "Sin direccion",
//       favoriteCategory : "Son categoria",
//       ...datos
//     };

//     dispatch({ type: 'REGISTRO', payload: nuevoUsuario });
//     return { conExito: true, mensaje: 'Registro exitoso' };
//   };

//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });
//   };

//   return (
//     <AuthContext.Provider value={{ usuarioActual: state.usuarioActual, login, registro, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth debe utilizarse dentro de AuthProvider');
//   }
//   return context;
// }

import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import {LoginFormData, UsuarioAutenticado } from '../domain/entities/usuario';
import { loginUser, logoutUser } from '../services/authService';

interface AuthContextValue {
  usuarioActual: UsuarioAutenticado | null;
  login: (datos: LoginFormData) => Promise<{ conExito: boolean; mensaje: string }>;
  logout: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(authReducer, {
    usuarioActual: null,
  });

  const login = async (datos: LoginFormData) => {
    try {
      const credential = await loginUser(datos.email , datos.password);

      const usuario: UsuarioAutenticado = {
        id: credential.user.uid,
        name: credential.user.displayName ?? "Ricardo Alberco",
        email: credential.user.email ?? "",
        phone: "Sin telefono",
        address: "Sin direccion",
        favoriteCategory: "Sin categoria",
      };

      dispatch({ type: 'LOGIN', payload: usuario });
      return { conExito: true, mensaje: 'Login exitoso' };
    } catch (error: any) {
      console.log("[LOGIN ERROR]", error.code);
      return { conExito: false, mensaje: 'Correo o contraseña incorrectos' };
    }
  };

  const logout = async () => {
    await logoutUser();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ usuarioActual: state.usuarioActual, login, logout }}>
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