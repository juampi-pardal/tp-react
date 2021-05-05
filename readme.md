# Meli - TP

## Stack

La aplicación consta de un servidor en Node (TS + Express) que sirve los estaticos del front y ademas tiene una API para los servicios que consumo desde el browser. 


El front esta construido en React y cuenta con 3 vistas. 

- 1. Home   ---> / 
- 2. Search ---> /items?search=:query 
- 3. Detail ---> /items/:id <--- Detail


## Como levanto la app?

Primero que nada, hay que instalar todo.

Asegurarse de tener Typescript (`npm install typescript -g`).

En la carpeta root del proyecto, correr `npm install`.
Una vez que termine, ir a la carpeta client (`cd client`) y nuevamente correr `npm install`.

En este punto ya vamos a tener todas las dependencias tanto del Node como del front.

El proximo paso es buildear el front, para esto correr: `npm run build`.
Esto va a generar todos los JS en la carpeta /build que luego el Node devolverá.

Cuando termine de buildear el front, volvemos a la carpeta root (`cd ..`) y tenemos que levantar el node.
Para levantarlo podemos correr `npm run start`. Este script va a correr `tsc && node ./dist/server.js`. Si estas usando vs code, deje una config para que levante con F5 en modo Debug.

El Node levanta en el puerto 3000. 

Si llegaste hasta este punto, deberias poder entrar a: 
 - http://localhost:3000/
 - http://localhost:3000/items?search=iphone
 - http://localhost:3000/items/MLA865227261



## Algunas aclaraciones sobre el desarrollo y la estructura del proyecto


1. La aplicacion de Express se crea y configura en el archivo de src/config/app.ts y se levanta en el archivo src/server.ts.

2. Las llamadas a los servicios estan en src/services/meli-services.ts

3. Tanto el front como el back, cuentan con 3 carpetas para manejar los modelos y respuestas de los servicios.

Las carpetas son:

-  response: Donde se encuentran las interfaces de las respuestas de los servicios. En el Node sirve para "darle forma" a la respuesta de la api de meli. En el front sirve para lo mismo entre la API del node y el front.
- models: En models se encuentran las clases que se crean a partir de las respuestas de los servicios y las que manejo en cada aplicacion.
- deserializers: Los deserializers lo unico que hacen es crear, a partir de un response, el modelo que necesito para usar en la app. 


4. Noté que en los diseños de UX, estaban divididos por columnas pero no me parecio necesario descargar bootstrap para usar su sistema de Grid. Con Flex-box pude hacerlo sin problemas.


## Desarrollos que agregué

1. La app es responsive. Se ve bien en todas las resoluciones a partir de 320.
2. Agregue skeletons para la carga de servicios.
3. Agregué la paginación en el paso de search.
4. El breadcrumb es cliqueable y te hace una busqueda nueva por la categoria cliqueada. 



## Deploy

Por último, hice una app en Heroku y la deploye para que puedan probarla ahi tambien. 
Los links son: 
- https://meli-tp.herokuapp.com/
- https://meli-tp.herokuapp.com/items?search=iphone
- https://meli-tp.herokuapp.com/items/MLA915504409

Aclaracion: Si la app no se uso por un tiempo, tarda en cargar la primera vez.

## Fin

Creo que no me quedó más nada por contar.
Si llegaran a tener algun problema para levantar la app, por favor avisenme que lo revisamos!

Gracias por su tiempo!