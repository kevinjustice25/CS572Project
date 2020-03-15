const mongoose = require('mongoose');
const mongoDb = 'mongodb+srv://root:root@cluster0-wqdxy.gcp.mongodb.net/cs572db?retryWrites=true&w=majority';
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