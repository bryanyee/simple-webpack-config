const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
    filename: 'bundle.js',
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
              modules: {
                localIdentName: '[local]--[hash:base64:8]', // https://webpack.js.org/loaders/css-loader/#localidentname
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
      path.resolve(__dirname, 'src', 'js'), // https://webpack.js.org/configuration/resolve/#resolvemodules
      path.resolve(__dirname, 'src', 'styles'),
    ],
  }
};
