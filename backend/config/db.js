
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Assuming your models are defined in a file named models.js in the same directory
const { User } = require('../models/userModels')

const connectDB = async () => {
    try {
        console.log('MongoDB URL:', process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;




