
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Assuming your models are defined in a file named models.js in the same directory
const { User } = require('./models');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: $(conn.connection.host)` .cyan.underline )
        
    } catch (error) {
        console.error(error)
        process.exit(i)
        
    }
}





