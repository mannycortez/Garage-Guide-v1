const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const expressValidator =  require('express-validator')
const dotenv = require('dotenv')

dotenv.config()

// Database Connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({error: "Unauthorized!"});
    }
});

const port = 8080
app.listen(port, () => {
    console.log(`A NodeJS API is listening on port: ${port}`)
});