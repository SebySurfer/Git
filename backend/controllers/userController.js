const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error('Faltan Datos');
  }

  // Verificar si el usuario existe
  const userExiste = await UserActivation.findOne({ email });
  if (userExiste) {
    res.status(400);
    throw new Error('Ese usuario ya existe en la base de datos');
  }


  // Crear el usuario
  const user = await User.create({
    name,
    email,
    phoneNumber
  });

  res.status(201).json(user);
});
