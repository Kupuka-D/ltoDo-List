'use strict'



var mongoose = require('mongoose');
var schema = mongoose.Schema;

var taskSchema = schema({
    titulo: String,
    descripcion: String
});


//Acá le decimos con mongoose en que "tabla" guardar los modelos
//Si bien no coincide con el nombre en mongo, mongoose lo traduce a minusculas y lo pluraliza ej: Tarea=tareas
module.exports = mongoose.model('Task', taskSchema);