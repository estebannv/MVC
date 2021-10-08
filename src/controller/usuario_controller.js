const model_usuario = require('../model/usuario_model');

module.exports.getAll = async (request,response,next) => { 
    const autores = await model_usuario.find().exec();
    response.json(autores);
    console.log("funciona");
};