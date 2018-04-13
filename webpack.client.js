const path = require('path');
const webpack = require('webpack');

module.exports = {
    //devtool: 'source-map',
    entry: {
        main: [
            './src/index.js',
            './scss/app.scss'
        ]
    },
    output: {
        path: __dirname + "/public",
        publicPath: '/',
        //filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    }
}