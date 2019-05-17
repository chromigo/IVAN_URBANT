const path = require('path');

const prod = process.env.NODE_ENV === "production";

module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    devtool: 'inline-source-map',
    output: {
        filename: 'build/app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader", options: {
                            importLoaders: 1,
                            localIdentName: "[local]--[hash:base64:5]",
                            sourceMap: !prod,
                            modules: !prod
                        }
                    },
                    {loader: "less-loader", options: {sourceMap: !prod}}
                ],
                include: [path.join(__dirname, "src")]
            },
            {
                test: /\.(woff|woff2|eot|png|gif|jpg|svg)$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "less"]
    },
    devServer: {
        hot: true
    }
};