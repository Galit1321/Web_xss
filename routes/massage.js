var express = require('express');
var router = express.Router();

app.get("/login",function(req,res) {
    var param = req.query["user_name"];
    console.log(param);
});

function redirect(res){
    window.location = res;
}