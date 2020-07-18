const path = require("path");

module.exports = {
  entry: [
    "@babel/polyfill", //enable async-await
    path.join(__dirname, "frontend", "index.js"),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  
  devServer: {
    historyApiFallback: true,
  },
};
