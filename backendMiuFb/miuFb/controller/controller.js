const express = require('express');
const Model = require('../model/users')

/* module.exports.getAll = function(req, res){
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
};

module.exports.getUser = function(req, res){};
module.exports.getUserPosts = function(req, rest){};
module.exports.getComments = function(req, res){};
module.exports.getLikes = function(req, res){};
module.exports.getUserProfile = function(req, res){};
module.exports.getAllFriends = function(req, res){};
module.exports.getFriend = function(req, res){}; */

module.exports.addUser =  function(req, res){
    /*register a user*/
    console.dir('add user controller');
    
    const User = new Model({
        name: req.body.name,
        username:req.body.username,
        password: req.body.password,
    });
        
     User.save(function(err, req, res){
        if(err) {
            console.error('Error duplicate Username: ' + err); 
        }
        else{
            

        }         
    
    });
    
};

/* module.exports.addPost = function(req, res){
    //make sure a user exists first and loggedin 
    console.dir('get posts controller');
    
    const User = new Model({
        name: req.body.name,
        username:req.body.username,
        password: req.body.password,
    });
        
    User.save(function(err, user){
        console.log('hello 2');
        if(err) console.error('error: ' + err); 
        else
        console.dir(user);       
    });
    res.send({name:req.body.name, username:req.body.username});
        next();
};

module.exports.updatePost = function(req, res){};
module.exports.deletePost = function(req, res){};
module.exports.updateProfile = function(req, res){};
module.exports.addcomment = function(req, res){};
module.exports.addLike = function(req, res){};
module.exports.addFriend = function(req, res){};
module.exports.deleteFriend = function(req, res){}; */