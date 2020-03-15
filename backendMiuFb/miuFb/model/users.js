const mongoose = require('mongoose');

//users collection
//create a Schema
const Schema =  mongoose.Schema;
const userSchema = new Schema({
   _id:String,
    username : String, //unique:true,
    name:  String,
    password : String,
    roles: Array,
    picture: String,
    dateCreated: Date,

    
    posts : [ {
            postId: Object,
            userId : String,
            text: String,
            pictureUrl : String,
            datePosted: Date,
                        
            comments : [ {
                    userId : Object,
                    name : String,
                    text : String,
                    dateCommented: Date,
                    commentLikes :{count: Number, userId: [] } 
                }],
                        
            postLikes :{count: Number, userId: [] }                   
                
    }],
    
}); 
    // friends: [ { 
    //         userId : Object,
    //         username: String,
    //         enabled : Boolean
    //     }]
    
    // }, 
        // {versionKey:false}
    

//creating a Model and an instance user
const Model = mongoose.model('User', userSchema,'users');
 

module.exports= Model;
