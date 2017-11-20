var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'justice league' });
  //res.send("Hello World")
});

router.post('/login',function(req, res) {
    var dict = []; // create an empty array

    var person=[{
        userName:req.body.user_name ,
        pass:req.body.password
    }
    ]

    dict.push(person);
    res.render('massage', {user: req.body.user_name , people: person});
});




module.exports = router;
