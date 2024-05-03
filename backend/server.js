console.log("hola mundo")

const express = require('express')

const colors = require('colors')
const connectDB = require('./config/db')

const { errorHandler } = require('./middleware/errorMiddleware')
const { default: mongoose } = require('mongoose')

const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000
const mongourl = process.env.MONGO_URL;

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))

app.use(errorHandler);

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))



