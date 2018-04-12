const path = require('path');
const config = {
    entry: ['./src/client.js'],
    output: {
        path: __dirname + "/public/scripts",
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0', ['env', {
                        targets: {
                            browser: ['last 2 versions']
                        }
                    }]
                ]
            }
        }]
    }
}

module.exports = config;
