require('custom-env').env("dev")
const path = require('path')
const express = require('express')
const router = require('./router')
const {healthCheckDb} = require('./db/mongodb')
// Inicializar o express
const server = express();
// Definir configurações
server.use(express.json())
server.use(router);
server.use(express.static(path.join(__dirname, '..','jsx_compounds','header_sem_React')))
// Bind da porta
server.listen(process.env.PORT,() => {
    console.debug(`Server up and running on port ${process.env.PORT} 🚀`);
    healthCheckDb();
})


//Formulario
//Dados -> JSON
//