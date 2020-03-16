const mongoose = require('mongoose');

//users collection
//create a Schema
const Schema =  mongoose.Schema;
const userSchema = new Schema({

    username : String, //unique:true,
    name:  String,
    password : String,
    roles: {type:String, enum:['ADMIN', 'USER']},
    picture: String,
    dateCreated: { type: Date, default: Date.now()},
    
    
    posts : [ {
            postId: Schema.Types.ObjectId,
            //userId : String, //we have only one user per post
            text: String,
            pictureUrl : String,
            datePosted: {type: Date, default: Date.now()},
                        
            comments : [ {
                    userId : Schema.Types.ObjectId,
                    name : String,
                    text : String,
                    dateCommented: {type: Date, default: Date.now()},
                    commentLikes : {type: Number, min: 0},
                }],
                        
            postLikes :{type: Number, min: 0}                  
                
    }],
    
    
    friends: [ { 
            userId : Schema.Types.ObjectId,
            username: String,
            enabled : Boolean
        }]
    
    }, 
        {versionKey:false}
    );


//creating a Model and an instance user
const Model = mongoose.model('User', userSchema);

 

module.exports= Model;
