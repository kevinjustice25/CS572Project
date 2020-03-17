const mongoose = require('mongoose');
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const mongoDb = 'mongodb+srv://'+DB_USER+':'+DB_PASS+'@cluster0-wqdxy.gcp.mongodb.net/'+DB_NAME+'?retryWrites=true&w=majority';
console.log('db: ' +mongoDb);
module.exports=(req,res, next)=>{
    mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('Error', console.error.bind(console, 'Mongodb Connection error'));
    
    next();
}












/* //populating a user data
const User = new Model({
    name: 'Asaad',
    username:'asaad@miu.edu'
});
 User.save(function(err){
    if(err) console.log('error: ' + err);
    else
    console.log('User saved Correctly');
}); 
*/