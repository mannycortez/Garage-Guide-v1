const express = require('express');
const app = express();

// Routes
const { getPosts } = require('./routes/post');

app.get("/", getPosts);

const port = 8000;
app.listen(port, () => { 
    console.log(`Garage Guide API is listening on port: ${port}`);
});