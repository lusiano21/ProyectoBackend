# Proyecto Final
## E-commerce
Mi proyecto trata de compra en comida en restaurantes 
### Rutas 
#### Vistas:
*https://proyectobackend-production-1746.up.railway.app/register/
Pagina principal para registrarse

*https://proyectobackend-production-1746.up.railway.app/static/
Pagina para hacer login con la cuenta que creaste

*https://proyectobackend-production-1746.up.railway.app/static/me.html
Pagina privada donde pode ver tus datos y podes chatear con otros usuarios 

*https://proyectobackend-production-1746.up.railway.app/products
Pagina para ver todos los business disponibles y sus productos 

*https://proyectobackend-production-1746.up.railway.app/create
Pagina para crear los business solo habilitado para admins

*https://proyectobackend-production-1746.up.railway.app/reset
Pagina para la cual te envia un correo con un link para cambiar tu contraseña

*https://proyectobackend-production-1746.up.railway.app/new-password
Pagina para cmabiar la contraseña, solo sera habilitada con el token validado
#### Usuarios:

*https://proyectobackend-production-1746.up.railway.app/api/sessions/user
Metodo get: Trae a todos los usuarios. (Se necesita autenticación y autorizacion rol 'admin')

*https://proyectobackend-production-1746.up.railway.app/api/sessions/user
Metodo post: Crea usuarios tiene que colocar nombre, apellido, dni, email, password, phone, avatar(opcional), edad

*https://proyectobackend-production-1746.up.railway.app/api/sessions/user/:uid
Metodo put: Puede modificar las propiedades del o los usuarios dependiendo del rol
"admin": Cualquier Usuario.
"user": Solo puede modificar tu usuario.

*https://proyectobackend-production-1746.up.railway.app/api/sessions/user/:uid
Metodo delelte: Puede eliminar al usuario dependiendo del rol
"admin": Cualquier Usuario.

*https://proyectobackend-production-1746.up.railway.app/api/sessions/user/:uid
Metodo get: puede traer a un usuario en especifico dependiendo del rol,
"admin": Cualquier Usuario.
"user": Solo puede trer tu usuario.

#### Order:

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order
Metodo get: Trae todas las ordenes creadas.(Solo con el rol de "admin").

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order
Metodo post: Puede crear ordenes de con el formato de:
user:(id del usuario),
product:(id del negocio),
products:[product(id del producto creado en products), quantity(Cantidad en la que lo vas a comprar), price(Cuanto cuesta comprarlo)]

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order/:id
Metodo get: Puede traer al informacion de una orden especifica dependiendo el rol:
"admin": Cualquier Orden.
"user": Solo puede trer tu Orden.

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order/:id/resolve
Metodo put: Puedes cambiar el estado de la orden para confirmar la compra

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order/:id
Metodo put: Puedes modificar los productos de la order el id, quantity o price

*https://proyectobackend-production-1746.up.railway.app/api/sessions/order/:id
Metodo delelte: Puedes borrar una orden solo si eres de rol "admin"

#### Products:
*https://proyectobackend-production-1746.up.railway.app/api/sessions/products
Metodo get: Puede traer todas los business, solo lo puede hacer con el rol "admin" y "user"

*https://proyectobackend-production-1746.up.railway.app/api/sessions/products
Metodo post: Puede crear los business, con el formato;
name:(Nombre del negocio)
image:(Imagen que del negocio)
stock:(Stock disponible del producto)
products:[
    id:(numero de identificador del producto),
    name:(nombre del Negocio),
    price:(precio del producto)
]

*https://proyectobackend-production-1746.up.railway.app/api/sessions/products/:id
Metodo get: Puede traer un business en especifico, solo lo puede hacer con el rol "admin"

*https://proyectobackend-production-1746.up.railway.app/api/sessions/products/:id
Metodo put: Puede modificar los business especificados, solo se puede hacer con el rol "admin"

*https://proyectobackend-production-1746.up.railway.app/api/sessions/products/:id
Metodo delete: Puede eliminar el business especificado, solo lo puede hacer con el rol "admin"
