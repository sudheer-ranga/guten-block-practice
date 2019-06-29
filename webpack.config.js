// webpack.config.js
const babelOptions = require('./config/babel.options');

let folders = process.cwd().split('/');
let pluginFolderName = folders[folders.length - 1];
let production = false;

module.exports = {
  mode: production ? 'production' : 'development',
  context: __dirname,
  entry: process.cwd() + '/index.js',
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].js',
    path: process.cwd() + '/build',
    publicPath: production
    ? `/wp-content/plugins/${pluginFolderName}/build/`
    : `http://localhost:8000/`,
  },
  devServer: {
    port: '8000',
    overlay: true,
    disableHostCheck: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: babelOptions.plugins,
              presets: babelOptions.presets
            },
          },
          {
            loader: require.resolve('eslint-loader'),
            options: {
              configFile: require.resolve('./config/eslint'),
            },
          },
          {
            loader: require.resolve('./config/loader'),
            options: {
              pluginFolderName,
            },
          },
        ],
      }
    ]
  }
};