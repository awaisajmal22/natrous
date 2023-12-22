
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const app = require('./app');
const DB = require('./config/db');


const port = process.env.PORT || 3000;
    app.listen(port, ()=>{
        console.log(`App is running ${port}`);
    });
