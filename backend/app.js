const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');
var cors = require('cors');

app.use(express.json());
app.use(cors());

const { users, courses } = require('./src/');

app.use('/users', users);
app.use('/courses', courses);

app.use((req, res, next)=> {
    res.status(404).json({
        message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    });
});

app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`);
})