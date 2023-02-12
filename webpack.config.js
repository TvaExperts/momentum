const path = require('path');

module.exports = {
  entry: './momentum/src/index.js',
  plugins: [
    new CleanWebpackPlugin(['momentum/dist']),
  ],
  output: {
    path: path.resolve(__dirname, 'momentum/dist'),
    filename: 'bundle.js',
  },
};