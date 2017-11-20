var express = require('express');
var router = express.Router();


function redirect(res){
    window.location = res;
}