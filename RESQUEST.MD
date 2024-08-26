# Peticiones

## Registro e inicio de sesión

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
