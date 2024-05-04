

const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')


// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000

console.log('MongoDB URL:', process.env.MONGO_URL);

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/tareas', require('./routes/tareasRoutes'))

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))


console.log('Loaded environment variables:', process.env);
