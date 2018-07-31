const webpack = require('webpack');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: 'production',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
