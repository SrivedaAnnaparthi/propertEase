const mongoose = require('mongoose');
require('dotenv/config');

// const connectionURI = 'mongodb+srv://sriveda:propertEase@cluster0.axvpp.mongodb.net/propertEase?retryWrites=true&w=majority';

const connectToMongo = () => {
    mongoose.connect(process.env.DB_CONNECTION, (res) => {
        if(res ===  null) console.log("Connect SSuccess!")
        else console.log(res)
    });
}

module.exports = connectToMongo;