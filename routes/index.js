var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'justice league' });
  //res.send("Hello World")
});

router.post('/login',function(req, res) {
    var personDict = []; // create an empty array
    var postsDict = []; // create an empty array
    var person=[{
        userName:req.body.user_name ,
        pass:req.body.password
    }
    ]
    var firstPost=[{
        title: "first response!",
        text: "hi there"
    }
    ]
    personDict.push(person);
    postsDict.push(firstPost);
    res.render('massage', {user: req.body.user_name , people: person, pagePosts: postsDict});
});




module.exports = router;
