var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
       path: __dirname + '/public/build/',
       publicPath: "build/",
       filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude:[/node_modules/,/public/]
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
                ],
                exclude: [/node_modules/,/public/]
             },
             {
                 test: /\.jpg$/,
                 loader:"url-loader?limit=10000&mimetype=image/jpg"
             },
             {
                 test: /\.gif$/,
                 loader:"url-loader?limit=10000&mimetype=image/gif"
             },
             {
                 test: /\.png$/,
                 loader:"url-loader?limit=10000&mimetype=image/png"
             },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel-loader",
                exclude:[/node_modules/,/public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}