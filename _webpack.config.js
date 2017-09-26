var webpack = require('webpack')
var path = require('path')

module.exports = {

    entry: "./src/index.js", // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        path: path.resolve(__dirname, 'dist'), // string
        filename: "[name].js", // string
        publicPath: '/', // string
        // library: 'riotInputFilter'
    },

    // externals: {
    //     "riot": {
    //         commonjs: "riot",
    //         commonjs2: "riot",
    //         amd: "riot",
    //         root: "riot"
    //     },
    //     "flatpickr": {
    //         commonjs: "flatpickr",
    //         commonjs2: "flatpickr",
    //         amd: "flatpickr",
    //         root: "flatpickr"
    //     },
    //     "nouislider": {
    //         commonjs: "nouislider",
    //         commonjs2: "nouislider",
    //         amd: "nouislider",
    //         root: "nouislider"
    //     },
    // },

    module: {
        // configuration regarding modules

        rules: [
            { test: /\.html$/, loader: 'riotjs', enforce: 'pre' },
            { test: /\.js|\.html$/, loader: 'babel', options: { presets: ['es2015-riot'] }},
        ],

    },

    resolveLoader: {
        moduleExtensions: ["-loader"]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
		new webpack.ProvidePlugin({
			riot: 'riot'
		}),
    ],

    devtool: "source-map", // enum
    context: __dirname, // string (absolute path!)

    // context: __dirname, // string (absolute path!)

    target: "web", // enum

    stats: { //object
        assets: true,
        colors: true,
        errors: true,
        //errorDetails: true,
        //hash: true,
    },

    devServer: {

        contentBase: './', // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: false, // true for index.html upon 404, object for multiple paths
        noInfo: false, // only errors & warns on hot reload
        // ...
    },

}
