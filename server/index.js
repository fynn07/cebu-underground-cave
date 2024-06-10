const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const PORT = 3400;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/contentRoutes'));

app.listen(PORT, () => {
    console.log("Running Server")
})

