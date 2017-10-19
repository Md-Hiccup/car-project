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
        res.json({home: 'index home page'})
    });
    router.get('/api', function(req, res){
        res.json(
            [{ api : 'from api' }])
    });
    router.post('/log', function(req, res){
        console.log("request : ",req.body);
        res.json(req.body);
    });

    // router.get('/signup', function (req, res) {
    //     res.json({ signup: "from signup page" });
    // });
    router.post('/signup', passport.authenticate('local-signup', {
        failWithError : true
    }),function(user, req, res, next){
        console.log('UserSignup  : '+ JSON.stringify(user));
        res.json(user);
    });

    // router.get('/login', function (req, res) {
    //     res.json({ login :  'from login page'})
    // });
    router.post('/login', passport.authenticate('local-login', {
        failWithError : true
    }),function(user, req, res, next) {
        console.log("UserLogin :"+JSON.stringify(user));
        res.json(user);
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

    router.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            // res.redirect('/')
            res.json({ logout: "from logout page" });
        });
        console.log("in logout");
    });

    return router;
}
