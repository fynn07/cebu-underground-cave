const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = 3300;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/userRoutes'));

app.listen(PORT, () => {
    console.log("Running Server")
})

