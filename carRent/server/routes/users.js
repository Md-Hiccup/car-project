/**
 * Created by hussain on 17/10/17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        name: "Hiccup",
        pass: 'hiccup'
    }, {
        id: 2,
        name: "King Arthur",
        pass: 'king-arthur'
    }]);
});

module.exports = router;