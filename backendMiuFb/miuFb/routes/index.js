var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('Hello Index');
  res.render('index', { title: 'Express' });
});
/* 
router.get('/login', function(req, res, next){
  res.end({login:'login page'});
});

router.get('/register', function(req, res, next){
  res.end({registe:'signup page'});
});

router.post('/login', function(req, res, next){
  //authenticate user
  res.end({userPage:'user page'});
});

router.post('/register', function(req, res, next){
  //check username does not exist
  res.end({register:'signed up sucessful'});
});

//unknown route forward it to home
router.get('*', function(req,res,next){
  res.render('index', {title:'Express'});
}); */

module.exports = router;
