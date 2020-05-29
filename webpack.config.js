const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env === 'production';
  let env1 = {};
  const publicPathSite = '/dist/';
  if (isProduction) {
    env1 = dotenv.config({ path: '.env' }).parsed;
  } else {
    env1 = dotenv.config({ path: '.env.development' }).parsed;
  }

  const envKeys = Object.keys(env1).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env1[next]);
    return prev;
  }, {});

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: publicPathSite,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            }, // 'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: '[id].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // cheap-module-eval-source-map
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
  };
};

// loader
