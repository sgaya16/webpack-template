// the webpack file itself is a JS module that exports an object
// that will customize the behavior of webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/index.js', // indicates which module webpack should use to begin building out the dependency graph
    output: {
        filename: 'my-bundle.[contenthash].js',  // [contenthash] comes from webpack caching: https://webpack.js.org/guides/caching/
        path: path.resolve(__dirname, 'dist'),
        clean: true,  // will clean old files not used by build: https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
        assetModuleFilename: '[name][ext]'  // keeps file names from assets folder the same when built
    },
    module: {
        rules: [  // `test` indicates which file types to convert, `use` indicates which loaders to use for the conversion
            { test: /\.scss$/, 
              use: ['style-loader', 'css-loader', 'sass-loader']  // order matters here!! https://webpack.js.org/loaders/sass-loader/
            },
            { test: /\.js$/, exclude: /node_modules/, 
              use: { loader: 'babel-loader',
                options: { 
                    presets: ['@babel/preset-env']
                }, 
              },
            },
            {
              test: /\.(png|svg|jpeg|jpg|gif)$/i,  //the `i` means it's not case sensitive
              type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({title: 'Webpack App', filename: 'index.html', template: 'src/template.html'}),  //generates an html file that includes the webpack bundle in the <script> tag
    ],
    devtool: 'source-map',  //creates a source map on build to help with debugging
    devServer: {  // runs webpack-dev-server which will detect changes in the code & re-compile
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        hot: true,
        compress: true,
    },
};