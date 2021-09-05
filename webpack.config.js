const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "app.js"),
    // entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['@babel/preset-env', '@babel/preset-react']
            //     }
            // }
        }, {
            test: /\.s?css$/,
            use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass')
                }
            }
        ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }
        // contentBase: path.join(__dirname, 'public')
    }
};