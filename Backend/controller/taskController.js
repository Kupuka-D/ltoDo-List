'use strict'

var Task = require('../model/taskModel');
var fs = require('fs');
var path = require('path');

var controller = {

    home: (req, res) => {
        return res.status(200).send({
            message: "Respuesta de la home"
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: "Respuesta de test"
        });
    },

    saveTask: (req, res) => {
        var task = new Task();

        var params = req.body;
        task.titulo = params.titulo;
        task.descripcion = params.descripcion;

        task.save((err, taskStored) => {
            if (err) return res.status(500).send({ message: "Se produjo un error al intentar guardar la tarea" });

            if (!taskStored) return res.status(404).send({ message: "No se pudo guardar la tarea" });

            return res.status(200).send({ task: taskStored });
        })

    },

    getTask: (req, res) => {
        var id = req.params.id;

        Task.findById(id, (err, task) => {
            if (err) return res.status(500).send({ message: "Se produjo un error al devolver los datos" });

            if (!task) return res.status(404).send({ message: "No se pudo retornar la tarea" });

            return res.status(200).send({ task });

        });
    },

    getTasks: (req, res) => {

        Task.find({}).exec((err, tasks) => {
            if (err) return res.status(500).send({ message: "Se produjo un error al devolver los datos" });

            if (!tasks) return res.status(404).send({ message: "No se pudieron retornar las tareas" });

            return res.status(200).send({ tasks });

        });
    },

    updateTasks: (req, res) => {
        var id = req.params.id;
        var update = req.body;
        console.log(update);

        Task.findByIdAndUpdate(id, update, { new: true }, (err, task) => {
            if (err) return res.status(500).send({ message: "Se produjo un error al actualizar los datos" });

            if (!task) return res.status(404).send({ message: "No se pudo actualizar la tarea" });

            return res.status(200).send({ task });

        });
    },

    deleteTasks: (req, res) => {
        var id = req.params.id;
        console.log(id);

        Task.findByIdAndRemove(id, (err, task) => {
            if (err) return res.status(500).send({ message: "Se produjo un error al borrar los datos" });

            if (!task) return res.status(404).send({ message: "No se pudo borrar la tarea" });

            return res.status(200).send({ task: task });

        });
    },


};

module.exports = controller;