var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'justice league' });
    //res.send("Hello World")
});
var personDict = []; // create an empty array
var postsDict = []; // create an empty array
router.post('/login',function(req, res) {


    var firstPost={
        titl: "first response!",
        txt: "hi there"
    }

    // personDict.push(person);
    postsDict.push(firstPost);
    res.render('massage', {user_name: req.body.user_name , pagePosts: postsDict});
});

router.post('/massage', function(req, res, next) {
    var firstPost={
        titl: req.body.txt_field,
        txt: res.user_name
    }
    postsDict.push(firstPost);
    res.render('massage', {user_name: req.body.user_name , pagePosts: postsDict});
});

module.exports = router;
