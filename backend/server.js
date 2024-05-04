console.log("hola mundo")

const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
// Connect to MongoDB
connectDB();

const { errorHandler } = require('./middleware/errorMiddleware')


const dotenv = require('dotenv').config()


console.log('Loaded environment variables:', dotenv.parsed);



const port = process.env.PORT || 3000
//const mongourl = process.env.MONGO_URL;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



// Routes
app.use('/api/tareas', require('./routes/tareasRoutes'))

// Error handling middleware
//const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Start server
app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))