
/*
router para rest api de funciones Prueba
*/
var pruebaController=require('../controller/pruebaController');
////
var express=require('express');
////
module.exports=function(app){
    ///////
    route=express.Router();
    ////////
    //
    //creando la ruta de GET url:dominio.com/prueba/lista
    //
    route.get('/lista',pruebaController.listar);
    
     //////
     app.use('/prueba',route);
     //////
}