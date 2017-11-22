var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'justice league' });
    //res.send("Hello World")
});
var personDict = []; // create an empty array
var postsDict = []; // create an empty array
router.get('/login',function(req, res) {
    res.render('massage', {title: req.body.user_name, pagePosts: postsDict});
    //res.send(req.body.user_name,req.body.password);
});

router.get('/attack2',function(req, res) {


    var firstPost={
        titl: "first response!",
        txt: "hi there"
    }
    postsDict.push(firstPost);
    res.render('attack2', {name: req.query.user_name});
    //res.send(req.body.user_name);
});

router.post('/massage', function(req, res, next) {
    var firstPost={
        titl: req.body.user_name,
        txt: req.body.txt_field

    }
    postsDict.push(firstPost);
    res.render('massage', {user_name: req.body.user_name , pagePosts: postsDict});
});

router.get('/attack', function(req, res){
    res.render('attack3', {title: 'Home',user_name: 'banana'});
});


module.exports = router;
