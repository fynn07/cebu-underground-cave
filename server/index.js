const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const PORT = 3400;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/contentRoutes'));

app.listen(PORT, () => {
    console.log("Running Server")
})

