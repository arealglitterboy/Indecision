const path = require('path');
const public = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: public,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }, {
            test: /\.s?css$/,
            use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('dart-sass')
                }
            }]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: public
    }
};