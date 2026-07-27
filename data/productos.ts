import { ImageSourcePropType } from 'react-native';

export interface Producto {
  id: string;
  nombre: string;
  precio: number; 
  categoria : string
  imagen: ImageSourcePropType; 
}

export const Productos : Producto[] = [
    {
    id: '1',
    nombre: 'Naruto Uzumaki',
    categoria: "Naruto",
    precio: 89.99,
    imagen: require('../assets/funkoNaruto.png'), 
  },
  {
    id: '2',
    nombre: 'Luffy Gear 4',
    categoria: "Naruto",
    precio: 89.99,
    imagen: require('../assets/luffyFunko.png'), 
  },
  {
    id: '3',
    nombre: 'Goku DZ',
    categoria: "Naruto",
    precio: 89.99,
    imagen: require('../assets/gokuFunko.png'), 
  },
  {
    id: '4',
    nombre: 'Zenitsu DS-899',
    categoria: "Naruto",
    precio: 89.99,
    imagen: require('../assets/zenitsuFunko.png'), 
  },

]