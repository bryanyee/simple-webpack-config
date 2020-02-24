module.exports = {
  mode: 'development',
  entry: './test.js',
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
};
