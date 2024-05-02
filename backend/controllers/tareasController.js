const asyncHandler = require('express-async-handler');

const Tarea = require('../models/tareasModels');

const getTareas = asyncHandler(async (req, res) => {
  // Assuming you'll handle fetching tasks from the database here
  const tareas = await Tarea.find();
  res.status(200).json(tareas);
});

const crearTareas = asyncHandler(async (req, res) => {
  if (!req.body.descripcion) {
    res.status(400).json({ message: "Por favor manda un mensaje baboso" });
  } else {
    // Assuming you'll handle creating tasks in the database here
    console.log(req.body);
    res.status(201).json({ message: "Tarea creada exitosamente" });
  }
});

const updateTareas = asyncHandler(async (req, res) => {
  // Assuming you'll handle updating tasks in the database here
  res.status(200).json({ message: "Tarea actualizada exitosamente" });
});

const deleteTareas = asyncHandler(async (req, res) => {
  // Assuming you'll handle deleting tasks in the database here
  res.status(200).json({ message: "Tarea eliminada exitosamente" });
});

module.exports = {
  getTareas,
  crearTareas,
  updateTareas,
  deleteTareas
};