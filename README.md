![Logo]()
# fFakestoreapi
## Pasos de Instalación
Para instalar y ejecutar DragonBallAPI, sigue estos pasos:
1. Clonar el repositorio
```bash
  https://github.com/Naiker12/ionic-angular-fakestore-ecommerce.git
```
2. Instalar dependencias Desde una terminal en la carpeta del proyecto, ejecuta:
```bash
  npm run test
```

3. Ejecutar el proyecto
 ```bash
   npm start
 ```

## Descripción del Proyecto
FakeStoreAPI es una API RESTful gratuita que proporciona datos de ejemplo sobre productos, categorías, carritos y usuarios. Es ideal para pruebas, desarrollo de interfaces de usuario y simulaciones de comercio electrónico.

## Características Principales
-✅ Productos de ejemplo con imágenes, precios y descripciones.
-✅ Información estructurada de categorías de productos.
-✅ Simulación de carritos de compras y usuarios.
-✅ API REST fácil de integrar en cualquier aplicación.
-✅ Respuesta en formato JSON lista para consumir.

## Tecnologías Utilizadas
Ionic +  Angular.

## Ejemplo de Uso
Endpoints Principales
```bash
  GET https://fakestoreapi.com/products
```
-Respuesta:
```bash
  [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  }
]
```
## Obtener productos por categoría:

```bash
  GET https://fakestoreapi.com/products/category/men's clothing
 ```

##  Obtener detalles de un producto:

```bash
  GET https://fakestoreapi.com/products/1
 ```

## Simulación de carrito de compras:

```bash
  GET https://fakestoreapi.com/carts
 ```

##  Contacto
Para más información, contáctanos en: gomeznaieker@gmail.com

# Intro Page


