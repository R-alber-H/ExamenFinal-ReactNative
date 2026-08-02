# 🎮 FunkoVerse

FunkoVerse es una aplicación móvil desarrollada con **React Native**, **Expo Router** y **NativeWind** que simula una tienda de figuras Funko Pop.

El proyecto fue desarrollado de manera individual para el curso **Desarrollo de Aplicaciones Móviles I**, con el objetivo de aplicar conceptos de navegación, persistencia local mediante SQLite, consumo de APIs REST y gestión de estado.

## ✨ Funcionalidades

- 🔐 Inicio de sesión simulado.
- 🛍️ Catálogo de Funkos.
- 🛒 Carrito de compras.
- 💾 Registro de pedidos utilizando SQLite.
- 📋 Historial de pedidos.
- ✏️ Cambio de estado de los pedidos.
- 🗑️ Eliminación de pedidos.
- 🎲 Consumo de la PokéAPI para mostrar un Pokémon aleatorio en la pantalla de perfil.

## 🛠️ Tecnologías

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind
- SQLite (expo-sqlite)
- Context API
- React Native Reanimated

## 📂 Estructura del proyecto

```text
app/
components/
context/
data/
domain/
hooks/
infrastructure/
reducers/
services/
theme/
utils/
```

## 💾 Persistencia de datos

El carrito de compras se administra en memoria durante la sesión del usuario.

Cuando el usuario confirma la compra, se registra un nuevo pedido en **SQLite**, permitiendo:

- Crear pedidos.
- Consultar el historial.
- Actualizar el estado del pedido.
- Eliminar pedidos.

## 🌐 Consumo de API

La aplicación realiza una petición **GET** a la **PokéAPI** para obtener un Pokémon aleatorio que se muestra en la pantalla de perfil como una funcionalidad recreativa. Además, se implementa manejo de errores mostrando un Pokémon de respaldo en caso de fallo.

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/R-alber-H/ExamenFinal-ReactNative.git
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicación:

```bash
npx expo start
```

## 👨‍💻 Autor

Ricardo Angel Alberco Huamancusi

Proyecto desarrollado para el curso **Desarrollo de Aplicaciones Móviles I**.