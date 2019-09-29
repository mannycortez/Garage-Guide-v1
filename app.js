const express = require('express');
const app = express();
const morgan = require('morgan');

// Routes
const postRoutes = require('./routes/post');

// Middleware
app.use(morgan('dev'));

app.use("/", postRoutes);

const port = 8000;
app.listen(port, () => { 
    console.log(`Garage Guide API is listening on port: ${port}`);
});