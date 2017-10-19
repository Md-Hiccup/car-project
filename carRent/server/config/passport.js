/**
 * Created by hussain on 18/10/17.
 */

//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var configAuth = require('../config/auth');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport, user , google, facebook){

    var User = user;
    var Google = google;
    var Facebook = facebook;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(err, user) {
            if(user){
                done(null, user.get());
            }
            else{
                done(null, err);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log('signup 111111111');
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({where: {email: email}}).then(function (user) {
                if (user) {
                    return done({status : 401 , message : 'email is already taken'});
                }
                else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        email: email,
                        password: userPassword,
                        name: req.body.name,
                        mobile:req.body.mobile
                    };
                    User.create(data).then(function (newUser, created){
                        console.log('new user 3333333333');
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done({status : 200 , id : newUser.id , name : newUser.name});
                        }
                    }).catch(function(error) {
                        return done({status : 401 ,message : 'Email is not valid'});
                    });
                }
            }).catch(function(error) {
                return done({status : 401 , message : 'Something went wrong with your Signup'});
            });
        }
    ));


    //LOCAL SIGNIN
    passport.use('local-login', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var User = user;
            var isValidPassword = function(userpass,password){
                return bCrypt.compareSync(password, userpass);
            };
            User.findOne({ where : { email: email}}).then(function (user) {
                if (!user) {
                    return done({status: 401 , message :'Email does not exist' });
                }
                if (!isValidPassword(user.password,password)) {
                    return done({status : 401 , message : 'Incorrect password.'});
                }
                var userinfo = user.get();
                return done({status : 200 , id : userinfo.id , name : userinfo.name});
            }).catch(function(err){
                return done({status : 401 , message:'Something went wrong with your Login'});
            });
        }
    ));

    passport.use(new GoogleStrategy({
            clientID: configAuth.googleAuth.clientID,
            clientSecret: configAuth.googleAuth.clientSecret,
            callbackURL: configAuth.googleAuth.callbackURL,
            passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
            process.nextTick(function(){
                //user is not logged in yet
                if(!req.user) {
                    console.log('what happen bro 404 hahaha');
                    Google.findOne({where : {'id': profile.id}}).then(function ( user) {
                        console.log(req.user);
                        console.log(profile.id);
                        if (user) {
                            console.log("(((((((((((((");
                            console.log(user);
                            // return done({status : 200});
                            if(!user.Google.token){
                                user.Google.token = accessToken;
                                user.Google.name = profile.displayName;
                                user.Google.email = profile.emails[0].value;
                                /* user.save(function(err){
                                 if(err)
                                 throw err;
                                 });*/
                            }
                            return done(null, user);
                            // return done('Old User want to login');
                        } else {
                            console.log('new user');
                            var data= {
                                id : profile.id,
                                token : accessToken,
                                name : profile.displayName,
                                email : profile.emails[0].value
                            }
                            Google.create(data).then(function ( newUser , err) {
                                if (!newUser) {
                                    return done(null, false);
                                }
                                if (newUser) {
                                    return done(null , newUser);
                                    // return done({status : 200 , id : newUser.id , name : newUser.first_name+" "+newUser.last_name});
                                }
                            });
                        }
                    });
                    //user is logged in already, and needs to be merged
                } else {
                    console.log("need to be merged");
                    var user = req.user;
                    Google.id = profile.id;
                    Google.token = accessToken;
                    Google.name = profile.displayName;
                    Google.email = profile.emails[0].value;

                    /*  user.save(function(err){
                     if(err)
                     throw err;
                     return done(null, user);
                     });*/
                    return done('user is already logged in and needs to be merged');
                }
            });
        }
    ));

    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.appID,
            clientSecret: configAuth.facebookAuth.appSecret,
            callbackURL: configAuth.facebookAuth.callbackURL,
            profileFields: ['id', 'name','email', 'gender', 'profileUrl'],
            passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
            process.nextTick(function(){
                //user is not logged in yet
                if(!req.user) {
                    Facebook.findOne({where : {'id': profile.id}}).then(function ( user) {
                        // console.log(req.user);
                        console.log(profile.id);
                        if (user) {
                            console.log("(((((((((((((");
                            console.log(user);
                            // return done({status : 200});
                            if(!user.Facebook.token){
                                user.Facebook.token = accessToken;
                                user.Facebook.name = profile.displayName;
                                user.Facebook.email = profile.emails[0].value;
                                /* user.save(function(err){
                                 if(err)
                                 throw err;
                                 });*/
                            }
                            return done(null, user);
                            // return done('Old User want to login');
                        } else {
                            console.log('new user');
                            var data= {
                                id : profile.id,
                                token : accessToken,
                                name : profile.displayName,
                                email : profile.emails[0].value
                            };
                            Facebook.create(data).then(function ( newUser , err) {
                                if (!newUser) {
                                    return done(null, false);
                                }
                                if (newUser) {
                                    return done(null , newUser);
                                    // return done({status : 200 , id : newUser.id , name : newUser.first_name+" "+newUser.last_name});
                                }
                            });
                        }
                    });
                    //user is logged in already, and needs to be merged
                } else {
                    console.log("need to be merged");
                    var user = req.user;
                    Facebook.id = profile.id;
                    Facebook.token = accessToken;
                    Facebook.name = profile.displayName;
                    Facebook.email = profile.emails[0].value;

                    /*  user.save(function(err){
                     if(err)
                     throw err;
                     return done(null, user);
                     });*/
                    return done('user is already logged in and needs to be merged');
                }
            });
            // User.findOrCreate(..., function(err, user) {
            //     if (err) { return done(err); }
            //     done(null, user);
            // });
        }
    ));

}

//module.exports = passport;
