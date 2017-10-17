/**
 * Created by hussain on 17/10/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.json('index home page')
});
router.get('/api', function(req, res){
    res.json(
        [{ api : 'from api' }])
});
router.post('/login', function(req, res){
    console.log("request : ",req.body);
    res.json(req.body);
});

module.exports = router;