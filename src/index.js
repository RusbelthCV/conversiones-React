const express = require("express");
const port = 3000;
const app = express();
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({extended: true}));
app.set('view engine', 'jade');
app.get("/",function(req,res){
    res.render("conver");
});

app.post("/respuesta",function(req,res){
    let valor = req.body.valor;
    let medidaInicial = req.body.valor1;
    let medidaConvertir = req.body.valor2;
    let respuesta;
    if(medidaInicial == "millas" && medidaConvertir == "metros"){
       respuesta = eval(valor*"1609.344");
    }
    res.end("el valor de convertir de "+medidaInicial+" a "+medidaConvertir+" es "+respuesta+" "+medidaConvertir);
});


app.listen(port,function(){
    console.log("Escuchando desde el puerto: "+port);
});