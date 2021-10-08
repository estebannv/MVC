const express = require('express');
const route_usuario = require('./route/usuario_router');
const mongoose = require('mongoose');
const app = express();

//Conexion a base de datos
mongoose.connect("mongodb://localhost/tarea2");

mongoose.connection.on("error", function (e) {
    console.error(e);
});

mongoose.connection.once("open", function (e) {
    console.log("Conexion exitosa");
});

//Usar las rutas
app.use(route_usuario);

//Puerto del servidor
app.listen(3000);

