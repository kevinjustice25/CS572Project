const mongoose = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

/* const mongoDb = 'mongodb+srv://'+DB_USER+':'+DB_PASS+'@cluster0-wqdxy.gcp.mongodb.net/'+DB_NAME+'?retryWrites=true&w=majority';
module.exports=(req,res, next)=>{
    mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('Error', console.error.bind(console, 'Mongodb Connection error'));
    console.log('db connected');
    next();
} */
module.exports = {
    db: 'mongodb+srv://'+DB_USER+':'+DB_PASS+'@cluster0-wqdxy.gcp.mongodb.net/'+DB_NAME+'?retryWrites=true&w=majority'
}