const mongoose = require('mongoose');

var schema_usuario = mongoose.Schema({
    nombre: String,
    apellidos: String,
    fecha_nacimiento: Date,
    email: String,
    estado: Number,
    fecha_creacion: Date,
    fecha_modificacion: Date
});

var model_usuario = mongoose.model("usuario", schema_usuario);

module.exports = model_usuario;