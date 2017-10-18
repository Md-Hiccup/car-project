/**
 * Created by hussain on 17/10/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/passport');

module.exports = function (passport) {
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
    router.get('/auth/google', passport.authenticate('google', { scope: [ 'profile', 'email' ]}));

    router.get('/auth/google/callback', passport.authenticate('google', {
            //successRedirect : '/blog',
            failureRedirect : '/login'
        }), function (req, res) {
            global.headMain = 0;
            res.redirect('/home');
            //res.send("Google callback")
        }
    );
    router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email']}));

    router.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/login'
    }));

    return router;
}
