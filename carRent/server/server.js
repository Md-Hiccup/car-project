const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser'); // used to extract the body from incoming requests.
const app = express();
const config = require('./../webpack.config.js');
const compiler = webpack(config);
const env = require('dotenv').load();
const passport = require('passport');
// const index = require('./routes/index');
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

var routes = require('./routes/index')(passport);
app.use('/', routes);
app.use('/users',users);

var models = require("./models");
//load passport strategies
require('./config/passport.js')(passport, models.User, models.GoogleUser, models.FacebookUsers);

//Sync Database   [ for forcefully delete previous value in DB use .sync({force:true}.then(..) ]
models.sequelize.sync({force: true}).then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});
// Serve the files on port 3000.
app.listen(3005, function () {
    console.log('Example app listening on port 3005!\n');
});