module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./bin",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
  }
};