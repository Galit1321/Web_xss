var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'justice league' });
  //res.send("Hello World")
});

var person=[{
    firstName: 'Ifat',
    last:'Noyman'
},
    {
        firstName: 'Michal',
        last:'Shawat'
    },
    {
        firstName: 'Galit',
        last:'Vaknin'
    }
]

router.post('/login',function(req, res) {
res.render('massage', {user: req.body.user_name , people: person});
});


module.exports = router;
