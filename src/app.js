const path = require("path")//para rutear archivos
const express= require("express");
const app =express();


// configurar acceso a la ruta
app.set('views', path.join(__dirname + 'views')) // coge la ruta del metodo dirname el cual le indica la servidor
// crear servicio
app.listen(4030,()=>{
    console.log("Servidor en puerto 4030")
})