const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const devCssRules = {
    test: /\.(c|le)ss$/,
    use: [
        {loader: 'style-loader'},
        {
            loader: 'css-loader', options: {
                importLoaders: 1,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap: !prod,
                modules: !prod
            }
        },
        {loader: 'less-loader', options: {sourceMap: !prod}}
    ],
    include: [path.join(__dirname, 'src')]
};

const prodCssRules = {
    test: /\.(less)$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader"
    ]
};

//const cssRules = prod ? prodCssRules : devCssRules;
const cssRules = devCssRules;

module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    devtool: 'inline-source-map',
    output: {
        filename: 'build/app.js',
        path: __dirname
    },
    module: {
        rules: [
            cssRules,
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|png|gif|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'less']
    },
    devServer: {
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build/styles.css',
            path: __dirname
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
};