const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Allow app to parse json requests and files
app.use(express.json());

// GET request from index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

// Listens to the port to allow server to run 
app.listen(port, function(){
    console.log(`listening to ${ port }`);
});

