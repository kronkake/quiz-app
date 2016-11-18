'use strict';

const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: "./index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist/assets",
        publicPath: "/assets", // New
    },
    devServer: {
        contentBase: __dirname, // New
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react"]
                        }
                    }
                ]
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.json', 'jsx']
    }
};
