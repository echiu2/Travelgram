const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const sync = require('../seed')
// Allow app to parse json requests and files
app.use(express.json());
app.use(express.static('public'));

//this is middleware, any requests that go to /api will hit this router.
app.use('/api', require('./api'))

// GET request from index.html file. This makes sure all routes not handled will be redirected to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// sync().then(() => {
//   // Listens to the port to allow server to run
//   app.listen(port, function () {
//     console.log(`listening to ${port}`);
//   });
// });

app.listen(port, function () {
  console.log(`listening to ${port}`);
});
