const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    entry: './src/js/index.js',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /.css$/,
                exclude: /style.css$|normalize.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$|normalize.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyWebpack({
            patterns: [
                { from: './src/assets/', to: 'assets/' }
            ]
        })
    ]

}