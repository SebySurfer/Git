
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Assuming your models are defined in a file named models.js in the same directory
const { User } = require('./models');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        
    } catch (error) {
        console.error(error)
        process.exit(1)
        
    }
}





