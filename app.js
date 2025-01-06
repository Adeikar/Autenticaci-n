//Inicializamos el express
const express = require('express');
const app = express();

//seteamos para capturar datos del formulario 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//invocamos al dotenv 
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//El directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + 'public'));

//Establecemos motor de plantillas 
app.set('view engine', 'ejs');





app.listen(1000, (req, res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:1000');
})
