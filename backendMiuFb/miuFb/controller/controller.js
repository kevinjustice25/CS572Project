const express = require('express');
const Model = require('../model/users')

module.exports.getAll = function (req, res) {
    console.dir('get all controller');
    const cursor = Model.find({}).cursor();
    cursor.on('data', function (user) {
        console.dir({ name: user.name, username: user.username });
        //res.send(user); 
    });
    cursor.on('close', function () {
        res.end('Done!');
    })
    res.send('At Home');


}

module.exports.post = function (req, res) {
    console.dir('get posts controller');
    console.dir("outout: " + req.body.name);
    let userData = req.body
    console.log(userData)
    const User = new Model(userData);
    User.save(function (err, user) {
        console.log('hello 2');
        if (err) console.error('error: ' + err);
        else
            console.dir(user);
    });
    res.send(User);

}
//find by Id
module.exports.getById = function (req, res) {
    // console.dir('get all controller');
    const userid = req.params.id;
    let userData = req.body
    const User = new Model(userData);
    const newUser = User.findById(userid).lean().exec((error,result)=>{
        if(error) return console.error(error)
        try {
            console.log(result);
            
        } catch (error) {
            console.log("error getting results");
            console.log(error);
            
        }
        
    });
 

    res.send(newUser);
}

//update user
module.exports.updateById = function (req, res) {
    const userid = req.params.id;
    let userData = req.body
    const User = new Model(userData);

User.findByIdAndUpdate(userid,{$set:{name:User.name}},{new:true}).then((docs)=>{
    if(docs) {
      resolve({success:true,data:docs});
    } else {
      reject({success:false,data:"no such user exist"});
    }
 }).catch((err)=>{
     reject(err);
 })
 console.log(User);
 
res.send(User);
}