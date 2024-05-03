console.log("hola mundo")

const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000
const mongourl = process.env.MONGO_URL;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/tareas', require('./routes/tareasRoutes'))

// Error handling middleware
//const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Start server
app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))