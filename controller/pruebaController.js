 
//
//las funciones del router tienes 3 parametros de entra
//estas son :
/*
    request:son los datos que mando el cliente
    response: la respuesta del servidor al cliente
    next:
*/
exports.listar=function(req,res){
    res.status(400).json({
        msg:'hola, esto es una lista',
        nombre:'juanito'
    });
}