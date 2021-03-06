const path = require("path");
const webpack = require('webpack')
const dotenv = require('dotenv')
module.exports = () => {
  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
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
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader']
        }
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
}
