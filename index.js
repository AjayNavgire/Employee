const express = require("express");
const bodyparser = require("body-parser")

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: false}))

// parse request data content type application/json
app.use(bodyparser.json())

// define root route
app.get('/', (req, res)=>{
res.send('Hello world')
});

// import employee routes
const employeeRoutes = require('./src/routes/employeeRoute')

// create employee routes
app.use('/api/v1/employee',employeeRoutes)


// listen to the port 
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`)
})