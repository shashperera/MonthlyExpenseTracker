const mongoose = require('mongoose');
//Set up default mongoose connection

const db = async() => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected successfully')
    } catch (error) {
        console.log('DB conncetion error')
        
    }

}
 //Get the default connection

 module.exports = {db}
// var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));