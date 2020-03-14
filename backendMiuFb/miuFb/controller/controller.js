const express = require('express');
const Model = require('../model/users')

module.exports.getAll = function(req, res, next){
    console.dir('get all controller');

    const cursor = Model.find({}).cursor();
    cursor.on('data', function(user){
        console.dir({name:user.name, username: user.username});
        //res.send(user); 
        
    });
    cursor.on('close', function(){
        res.end('Done!');
    })
    res.send('At Home');

    next();
}

module.exports.post = function(req, res, next){
    console.dir('get posts controller');
    console.dir("outout: " + req.body.name);
    let userData=req.body
    console.log(userData)
    const User = new Model(userData);
        // name: req.body.name,
        // username:req.body.username
    User.save(function(err, user){
        console.log('hello 2');
        if(err) console.error('error: ' + err); 
        else
        console.dir(user);       
    });
    res.send({name:req.body.name, username:req.body.username});
        next();
}