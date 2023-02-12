const path = require('path');

module.exports = {
  entry: './momentum/src/index.js',

  output: {
    path: path.resolve(__dirname, 'momentum/dist'),
    filename: 'bundle.js',
  },
};