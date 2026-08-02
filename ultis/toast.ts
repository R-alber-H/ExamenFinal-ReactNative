import Toast from 'react-native-toast-message';

export const mostrarExito = (titulo:string, mensaje:string) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: titulo,
    text2: mensaje,
    visibilityTime: 3000,
  });
};

export const mostrarError = (titulo:string, mensaje:string) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: titulo,
    text2: mensaje,
    visibilityTime: 4000,
  });
};

export const mostrarInfo = (titulo:string, mensaje:string) => {
  Toast.show({
    type: 'info',
    position: 'top',
    text1: titulo,
    text2: mensaje,
    visibilityTime: 3000,
  });
};