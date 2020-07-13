module.exports = {
    entry: [
        '@babel/polyfill', //enable async-await
        './frontend/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };