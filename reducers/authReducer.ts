import { Usuario } from '../domain/entities/usuario';

export type UsuarioAction =
    | { type: 'REGISTRO'; payload: Usuario }
    | { type: 'LOGIN'; payload: Usuario }
    | { type: 'LOGOUT' };

export interface AuthState {
    usuarioActual: Usuario | null;
    usuarios: Usuario[];
}

export function authReducer(state: AuthState, action: UsuarioAction): AuthState {
    switch (action.type) {
        case 'REGISTRO':
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload]
            };
        case 'LOGIN':
            return{
                ...state,
                usuarioActual: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                usuarioActual: null
            }
        default:
            return state;
    }
}