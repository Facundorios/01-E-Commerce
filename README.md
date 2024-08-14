<p align="center">
  <a href="/"><img src='logo.png' width="250" alt="E-commerce" /></a>
</p>

</p>
<p align="center" >
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black"></a>
<a href="https://expressjs.com/" target="_blank"><img alt="Express" src="https://img.shields.io/badge/Express-000000.svg?logo=express&logoColor=white"></a>
<a href="https://www.mongodb.com/" target="_blank"><img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248.svg?logo=mongodb&logoColor=white"></a>
<a href="https://www.postman.com/" target="_blank"><img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37.svg?logo=postman&logoColor=white"></a>

## Descripción

**E-Commerce**: Este repositorio contiene un pequeño pero simple desarrollo backend de un e-commerce, utilizando Clases y Programacion Orientada a Objetos (POO)

## Instalación de librerias.

```bash
 npm install
```

## Configurar las variables de entorno necesarias.

```
PORT=
MONGO_URI=
```

## Iniciar la aplicación

```bash
npm run start

# En modo de desarrollo.
npm run start:dev
```

# Peticiones

### Cargar seed :

Metodo: GET

```
localhost:3000/api/product/seed
```

### Mostrar Productos :

Metodo: GET

```
localhost:3000/api/products
```

### Mostrar Producto por ID :

Metodo: GET

```
localhost:3000/api/product/id-del-producto
```

### Crear Producto:

Metodo: POST

```
localhost:3000/api/product/create
```

Cuerpo de la petición:

```
{
    "name": "Reloj",
    "price": 10.55,
    "description": "Esto es una descripción",
    "category": "Accesorios",
    "stock": 15
}
```

### Eliminar Producto por ID :

Metodo: DELETE

```
localhost:3000/api/product/id-del-producto
```
