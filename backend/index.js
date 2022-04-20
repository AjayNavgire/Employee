const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();


// setup the server port
const port = process.env.PORT || 5000;

// for connect front 
app.use(cors())

// for featching data from FE to DB or BE
app.use(express.json())

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});