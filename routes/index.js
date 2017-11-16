var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'justice league' });
  //res.send("Hello World")
});

router.post('/login',function(req, res) {

    res.render('massage', {title: req.body.user_name});
});


module.exports = router;
