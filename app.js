const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const tourRoutes = require('./routes/tour_routes');
const userRoutes = require('./routes/user_routes');

const app = express();
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
}
app.use(express.json());

app.use((req,res,next)=>{
console.log("Hello from middleware😁");
next();
});

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
    });


app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);


module.exports = app;