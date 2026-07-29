import { ImageSourcePropType } from "react-native";

export interface Producto {
  id: string;
  nombre: string;
  precio: number; 
  categoria : string
  imagen: ImageSourcePropType; 
}
