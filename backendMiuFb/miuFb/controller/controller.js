const express = require('express');
const Model = require('../model/users')

 module.exports.getAll = function(req, res){
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
/*
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

//add comment
module.exports.addComment =  function(req, res){
    /*loggedin user*/
    //query userId, postId $push comment
    console.dir(req.body.username);
    Model.findOneAndUpdate({'username':req.body.username, 'postId':req.body.postId},
            {$push:{'comments':req.body.comments.text}},
            function(err, comment){
                if(err)console.log("Error comment: " + err);
                else{
                    console.log(comment);
                }

            }
        );
    
    
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
