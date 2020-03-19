var express = require('express');
const controller = require('../controller/controller');
const checkAuth = require("../middlewares/checkAuth");
const Model = require('../model/users');


var router = express.Router();

router.get('/', controller.getAll);/* GET users listing. for admin only*/
/* router.get('/:userId', controller.getUser);
router.get('/profile/:userId', controller.getUserProfile);
router.get('/posts/:userId', controller.getUserPosts);
router.get('/comments/:postId', controller.getComments);
router.get('/likes/:postId', controller.getLikes);//???
router.get('/friends', controller.getAllFriends);
router.get('/friends/:friendId', controller.getFriend); */

//router.post('/', controller.addUser);
router.post('/posts/comments/:postId', controller.addComment);
//router.post('/posts/:email', controller.addPost);
router.post("/posts/:email", checkAuth, async (req, res) => {
    console.error('at post email :');
    console.log(req.body.email);
    console.log('post: ' + req.body.text);
    console.log('email: ' + req.params.email)

    await Model.updateOne({username: req.body.email},{
        $push:{posts:req.body}
    }, function(err, doc){
        if(!err){ 
            console.log(doc);
            res.send({Success:'post added successfully'});
        }
        else console.log('Error');
    })
});
  

/*router.post('/posts/comments/:postId', controller.addComment);
router.post('/posts/likes/:postId', controller.addLike);
router.post('/friends/add/:userId', controller.addFriend);

router.put('/posts/update/:postId', controller.updatePost);
router.put('/profile/:userId', controller.updateProfile);

router.delete('/posts/delete/:postId', controller.deletePost);
router.delete('/friends/delete/:userId', controller.deleteFriend); */

//users registration, signin, update and delete
router.post('/registerUser', controller.registerUser);
router.post('/signin', controller.signin);
/*router.put('/update/:id', controller.updateUser);
router.delete('./delete/:id', controller.deleteUser); */

// Get Single User profile
router.route('/userProfile/:id').get(checkAuth, (req, res, next) => {
  Model.findById(req.params.id, (error, data) => {
      if (error) {
          return next(error);
      } else {
          res.status(200).json({
              msg: data
          })
      }
  })
})

//================ add new post ==================//
/* router.route('/userProfile/:email').get(checkAuth, (req, res, next)=>{
    Model.updateOne({username: req.params.email},{
        $push:{posts:req.body}
    }, function(err, doc){
        if(!err){ console.log(doc);res.send(doc);}
        else console.log('Error');
    })
}); */

//======Update user=====//
router.route('/updateUser/:id').put((req, res, next) => {
  Model.findByIdAndUpdate(req.params.id, {
      $set: req.body
  }, (error, data) => {
      if (error) {
          return next(error);
          console.log(error)
      } else {
          res.json(data)
          console.log('User successfully updated!')
      }
  })
})


// Delete User
router.route('/deleteUser/:id').delete((req, res, next) => {
  Model.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
          return next(error);
      } else {
          res.status(200).json({
              msg: data
          })
      }
  })
})

//unknown route forward it to home
/* router.get('*', function(req,res,next){
    res.render('index', {title:'Express'});
    next();
  });
   */

module.exports = router;
