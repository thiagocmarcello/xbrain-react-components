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
    'material-ui/Input': 'material-ui/Input',
    'material-ui/styles/colorManipulator': 'material-ui/styles/colorManipulator',
    'prop-types': 'prop-types',
    'material-ui/Progress': 'material-ui/Progress',
    'material-ui/Table': 'material-ui/Table',
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
