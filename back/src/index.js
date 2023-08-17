/*

- GET getCharById: esta ruta obtendrá personajes de la API mediante su id.
- GET login: esta ruta es la que le dará o no acceso al usuario para usar la aplicación.
- POST postFav: esta ruta guardará en nuestro servidor a nuestros personajes favoritos.
- DELETE deleteFav: esta ruta eliminará a un personaje de nuestros favoritos.

*/

const express = require('express');
const  { getCharById } = require('./controllers/getCharacterById');
const server = express();
const PORT = 3001;
const router = require("./routes/index.js")


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());
server.use("/rickandmorty", router);


 server.listen(PORT, () => {
   console.log(`Server raised in port:${PORT}` );
});


