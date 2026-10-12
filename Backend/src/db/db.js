const mongoose = require('mongoose');




async function connectDB() {

    await mongoose.connect("mongodb://127.0.0.1:27017/full-p-1")
    .then((result) => {
        console.log("connect to db");
        
    }).catch((err) => {
        console.log(err);
    });
    
}

module.exports = connectDB;