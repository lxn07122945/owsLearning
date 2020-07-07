const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackUploadPlugin = require('webpack-upload');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        'whatwg-fetch',
        'babel-polyfill',
        './src/index.js'
    ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024',
                            name: '[path][name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            { test: /\.tsx?$/, loader: "ts-loader" }

        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new WebpackUploadPlugin({
            // 上传服务接口，插件会把文件逐个post到上传服务
            receiver: 'http://tc-pis-api-3.epc.baidu.com:8866/receive/index.php',
            to: '/home/map/odp-logistics/webroot/static/logistics/'
        })
    ],
    watchOptions: {
        ignored: './node_modules/'
    }
};
