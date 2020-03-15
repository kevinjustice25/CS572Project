var express = require('express');
const controller = require('../controller/controller');
//const mongoose = require('mongoose');

var router = express.Router();

//router.get('/', controller.getAll);/* GET users listing. for admin only*/
/* router.get('/:userId', controller.getUser);
router.get('/profile/:userId', controller.getUserProfile);
router.get('/posts/:userId', controller.getUserPosts);
router.get('/comments/:postId', controller.getComments);
router.get('/likes/:postId', controller.getLikes);//???
router.get('/friends', controller.getAllFriends);
router.get('/friends/:friendId', controller.getFriend); */

router.post('/', controller.addUser);
router.post('/posts/comments/:postId', controller.addComment);
/* router.post('/posts/:userId', controller.addPost);
router.post('/posts/update/:postId', controller.updatePost);
router.post('/posts/delete/:postId', controller.deletePost);
router.post('/profile/:userId', controller.updateProfile);
router.post('/posts/comments/:postId', controller.addComment);
router.post('/posts/likes/:postId', controller.addLike);
router.post('/friends/add/:userId', controller.addFriend);
router.post('/friends/delete/:userId', controller.deleteFriend); */

//unknown route forward it to home
/* router.get('*', function(req,res,next){
    res.render('index', {title:'Express'});
    next();
  });
   */
module.exports = router;
