# MM7 - E-Commerce App

Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra intuitiva y completa para los usuarios de la tienda urbana **MM7**.

## Funcionalidades Principales

### Home

- **Vista de Categorías:** Muestra las categorías de productos en la parte superior de la pantalla.
- **Listado de Productos:** Debajo de las categorías, se presentan todos los productos disponibles.
- **Barra de Búsqueda:** Permite filtrar productos por marca o características presentes en el título.

### Navegación Inferior

La aplicación cuenta con una barra de navegación inferior con cuatro botones:

- **Home:** Acceso a las categorías y listado de productos.
- **Carrito de Compras:** Visualización de productos agregados, con opción de finalizar la compra.
- **Órdenes:** Historial de compras finalizadas.
- **Perfil:** Información del usuario, configuración de ubicación y foto de perfil.

### Pantalla de Perfil del Usuario

- **Foto Personalizada:** Permite agregar una foto de perfil personalizada, solicitando autorización para usar la cámara del dispositivo.
- **Ubicación:** Solicita autorización de geolocalización para mejorar la experiencia de compra.
- **Autenticación:** Es necesario estar logueado para realizar compras. Si el usuario no tiene cuenta, se le solicita crear una.

### Persistencia en Firebase

- **Usuarios:** Registro y autenticación seguros.
- **Productos y Categorías:** Todos los datos de productos y categorías están almacenados y sincronizados con Firebase.

## Tecnologías Utilizadas

- **Firebase Authentication:** Gestor de autenticación para asegurar el acceso de los usuarios.
- **Firebase Firestore:** Almacenamiento y sincronización de productos, categorías y datos de usuarios.
- **React Native Navigation Stack:** Manejo de la navegación entre pantallas.
- **React Native Bottom Tabs:** Navegación por pestañas en la parte inferior de la aplicación.
- **Expo-Location:** Gestor de geolocalización para obtener la ubicación del usuario.
- **Expo-ImagePicker:** Permite la selección y carga de fotos de perfil.
- **Redux:** Manejo centralizado del estado de la aplicación.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/mm7-ecommerce.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para Firebase y Expo-Location.
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`



## Contacto

Para consultas o soporte, contacta a: **[maximiliano malano](mailto:maximalano@gmail.com)**.

