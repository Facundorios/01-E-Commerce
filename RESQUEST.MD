# Peticiones

## Registro de usuario (Cliente y Vendedor)

#### Cuerpo de la petición:

Metodo: POST

```
{
    "name": "tu-nombre",
    "surname": "tu-apellido",
    "email":"tu-correo@gmail.com",
    "password": "tu-contraseña",
    "role": "client" / "seller"
}
```

## Inicio de sesión (Cliente y Vendedor)

#### Cuerpo de la petición:

Metodo: POST

```
{
    "email":"tu-correo@gmail.com",
    "password": "tu-contraseña"
}
```

# Con un Token de usuario Seller:

## Cargar seed:

Metodo: GET

```
localhost:3000/api/product/seed
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

---

# Con un Token de Client

## Mostrar mi carrito

Metodo: GET

```
localhost:3000/api/cart/my-cart
```

## Añadir un produto al carrito

Metodo: POST

#### Cuerpo de la petición:

```
{
    "productId":"id-del-producto,
    "quantity": tu-cantidad
}
```

## Mostrar todos los productos:

Metodo: GET

```
localhost:3000/api/product/all
```

## Mostrar Producto por ID :

Metodo: GET

```
localhost:3000/api/product/`id-del-producto`
```

# Con un token Admin:

### Eliminar Producto por ID :

Metodo: DELETE

```
localhost:3000/api/product/id-del-producto
```
