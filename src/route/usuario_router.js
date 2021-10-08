const router = require('express').Router();
const usuario_controller = require('../controller/usuario_controller');

router.get("/",usuario_controller.getAll);

router.get("/contact",function (request,response){
    response.send("estamos en contact");
});

module.exports = router;