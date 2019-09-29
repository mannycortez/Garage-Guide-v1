const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

// Database connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${ err.message }`)
});

// Routes
const postRoutes = require('./routes/post');

// Middleware
app.use(morgan('dev'));

app.use("/", postRoutes);

const port = 8000;
app.listen(port, () => { 
    console.log(`Garage Guide API is listening on port: ${port}`);
});