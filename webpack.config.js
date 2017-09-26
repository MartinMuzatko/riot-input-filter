var webpack = require('webpack')
var path = require('path');

module.exports = {

    entry: './src/index.js', // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        path: path.resolve(__dirname, 'dist'), // string
        filename: "[name].js", // string
        publicPath: "/", // string
    },

    module: {
        // configuration regarding modules

        rules: [
            //{ test: /\.js$/, loader: 'source-map', enforce: 'pre' },
            { test: /\.html$/, loader: 'riotjs', enforce: 'pre' },
            { test: /\.js|\.html$/, loader: 'babel', options: { presets: 'es2015-riot' }},
        ],

    },

    resolveLoader: {
        moduleExtensions: ["-loader"]
    },

    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
    ],

    devtool: "#source-map", // enum

    context: __dirname, // string (absolute path!)

    target: "web", // enum

    stats: { //object
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        //hash: true,
    },

    devServer: {

        contentBase: path.join(__dirname, ''), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        //hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
        // ...
    },
}
