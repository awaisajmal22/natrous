const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(con => {
    console.log("DB Connected Successfull");
});

module.exports = DB;