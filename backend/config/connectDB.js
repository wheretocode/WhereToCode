const mongoose = require('mongoose');

const mongoURI = process.env.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected...');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;

