const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js',
    },
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: path.resolve(__dirname, 'assets', 'images' ,'favicon.png'),
            minify: {
                removeAttributeQuotes: isProduction,
                collapseWhitespace: isProduction,
                removeComments: isProduction,
            }
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.optimization = { splitChunks: { chunks: 'all' } };
        config.plugins.push(new CleanWebpackPlugin());
    } else {
        config.mode = 'development';
    }
    return config;
};
