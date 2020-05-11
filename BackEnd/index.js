const express = require('express');

// This is Es6 Destructuring concept
const { mongoose } = require('./db.js');

const bodyparser = require('body-parser');
const cors = require('cors');

var employeecontroll = require('./Controller/employeeController.js');
var app = express();

//set middleware now for each request
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}))

// set server port number
app.listen(3000, () => {
    console.log('server start at port: 3000');
});

app.use('/employee', employeecontroll);
