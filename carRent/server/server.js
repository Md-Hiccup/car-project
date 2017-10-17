const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser'); // used to extract the body from incoming requests.
const app = express();
const config = require('./../webpack.config.js');
const compiler = webpack(config);

const index = require('./routes/index');
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use('/', index);
app.use('/users',users);

// Serve the files on port 3000.
app.listen(3005, function () {
    console.log('Example app listening on port 3005!\n');
});