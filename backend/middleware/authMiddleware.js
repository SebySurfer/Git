const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const user = require('../models/userModels')

const protect = asyncHandler( (async(req, res, next) =>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    try {


        //Obtenemos el token
        token = req.headers.authorization.split(' ')[1]

        //Verificar la firma del token
        const decoded = jwt.verif(token, process.env.JWT_SECRET);

        //obtener los datos del usuario del payload del token y lo vamos a poner en un objeto

        req.user = await User.findById(decoded.id_usuario).select('-password')

        next()

    } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Acceso no autorizado')
    }
    
    if(!token){
        res.status(401)
        throw new Error  ('Acceso no autorizado, no porporcionaste el token')
    }



}

))

module.exports = {
    protect
}