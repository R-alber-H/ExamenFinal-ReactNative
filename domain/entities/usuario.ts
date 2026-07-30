export interface Usuario {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string | null;
  address: string | null; 
  favoriteCategory: string | null; 
}

export type LoginFormData = Omit<Usuario, 'id' | 'name'| 'phone' | 'address' | 'favoriteCategory'>;
export type RegistroFormData = Omit<Usuario,'id' | 'phone' | 'address' | 'favoriteCategory'>;
