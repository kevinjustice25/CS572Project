const mongoose = require('mongoose');

module.exports=(req,res, next)=>{
    mongoose.connect('mongodb+srv://root:root@cluster0-wqdxy.gcp.mongodb.net/cs572db?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
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