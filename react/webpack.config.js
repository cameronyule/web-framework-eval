module.exports = {
  entry: './src/index.js',
  output: {
    path: './bin',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  eslint: {
    failOnWarning: true,
    failOnError: true
  },
};
