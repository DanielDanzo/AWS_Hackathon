const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',  // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Ensure this is set to 'dist'
  },
  // Other configurations...
};
