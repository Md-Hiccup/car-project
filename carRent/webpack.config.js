var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

var isProd = process.env.NODE_ENV === 'production';
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./index.js",
        bootstrap : bootstrapConfig
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader','sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // For Bootstrap
            {
                test: /\.(woff2?|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
            { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
            // Bootstrap 3
            // { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery' },
            // Bootstrap 4
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports-loader?jQuery=jquery' },
        ],

    },
    devServer : {
        contentBase: './dist',
        compress: true,
        port: 9002,
        stats: 'errors-only',
        open: true,
        hot: true,
        // historyApiFallBack: true,
        // proxy: [
        //     {
        //         context: ['/api', '/users'],
        //         target: 'https://localhost:9002/',
        //         secure: false
        //     }
        // ]
    },
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'React js',
            template:'./public/index.html' ,
            minify : {
                collapseWhitespace : false
            },
            hash : true
        }),
        new ExtractTextPlugin({
            filename: "/css/[name].css",
            disable : !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            'Popper': ['popper.js', 'default'],
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        })
    ]
};