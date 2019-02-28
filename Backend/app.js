'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

//Cargar archivod de rutas
var routes = require('./routes/router');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Con la siguiente instruccion convertimos todas las peticiones a JSON
app.use(bodyParser.json());

//Cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', routes);



module.exports = app;