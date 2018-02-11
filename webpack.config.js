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
    'material-ui/Dialog': 'material-ui/Dialog',
    'material-ui/Form': 'material-ui/Form',
    'material-ui/Input': 'material-ui/Input',
    'material-ui/List': 'material-ui/List',
    'material-ui/Progress': 'material-ui/Progress',
    'material-ui/styles': 'material-ui/styles',
    'material-ui/styles/colorManipulator': 'material-ui/styles/colorManipulator',
    'material-ui/Table': 'material-ui/Table',
    'material-ui/Tabs': 'material-ui/Tabs',
    'material-ui/transitions': 'material-ui/transitions',
    'material-ui/transitions/Fade': 'material-ui/transitions/Fade',
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
