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
    'material-ui-icons/ArrowDropDown': 'material-ui-icons/ArrowDropDown',
    'material-ui-icons/ArrowDropUp': 'material-ui-icons/ArrowDropUp',
    'material-ui-icons/Clear': 'material-ui-icons/Clear',
    'material-ui': 'material-ui',
    'material-ui/colors': 'material-ui/colors',
    'material-ui/Dialog': 'material-ui/Dialog',
    'material-ui/Form': 'material-ui/Form',
    'material-ui/Input': 'material-ui/Input',
    'material-ui/List': 'material-ui/List',
    'material-ui/Menu': 'material-ui/Menu',
    'material-ui/Progress': 'material-ui/Progress',
    'material-ui/styles': 'material-ui/styles',
    'material-ui/styles/colorManipulator': 'material-ui/styles/colorManipulator',
    'material-ui/Table': 'material-ui/Table',
    'material-ui/Tabs': 'material-ui/Tabs',
    'material-ui/transitions': 'material-ui/transitions',
    'material-ui/transitions/Fade': 'material-ui/transitions/Fade',
    'prop-types': 'prop-types',
    'react-dom': 'react-dom',
    'react-select-fast-filter-options': 'react-select-fast-filter-options',
    'react-select': 'react-select',
    'react-select/dist/react-select.css': 'react-select/dist/react-select.css',
    'react-virtualized-select': 'react-virtualized-select',
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
