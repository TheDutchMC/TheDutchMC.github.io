'use strict';
const path = require('path');

module.exports = {
    devtool: "eval-cheap-source-map",
	entry: './src/ts/index.ts',
	output: {
		filename: 'dist.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Code'
	},
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.css', '.sass', '.scss' ],
    },
    mode: 'production',
};