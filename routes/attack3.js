var express = require('express');
var router = express.Router();

router.get('/attack',function(req, res) {


    res.render('massage', {user_name: req.body.user_name , pagePosts: postsDict});
});