// Webpack 3 docs: https://webpack-v3.netlify.com/
const path = require('path');

module.exports = {
  entry: './src/js/entry.js',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]--[hash:base64:8]',
              },
              localsConvention: 'camelCase',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src', 'js'),
      path.resolve(__dirname, 'src', 'styles'),
    ],
  }
};
