'use strict'



var express = require('express');
var taskController = require('../controller/taskController');

var router = express.Router();

//Cargamos las rutas en el router
router.get('/home', taskController.home);
router.post('/test', taskController.test);
router.post('/save-task', taskController.saveTask);
router.get('/get-task/:id', taskController.getTask);
router.get('/get-tasks', taskController.getTasks);
router.put('/update/:id', taskController.updateTasks);
router.delete('/delete/:id', taskController.deleteTasks);


//Exportamos el router cargado con todas las rutas
module.exports = router;