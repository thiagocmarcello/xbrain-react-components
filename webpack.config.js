const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'xbrain-react-components.min.js',
    libraryTarget: 'umd',
    library: 'XbrainReactComponents',
  },
  externals: {
    'material-ui': 'material-ui',
    'material-ui/styles': 'material-ui/styles',
    'material-ui/transitions': 'material-ui/transitions',
    'material-ui/List': 'material-ui/List',
    'prop-types': 'prop-types',
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })],
};

module.exports = config;
