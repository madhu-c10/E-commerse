const mongoose = require('mongoose')

const dbConnection=()=>{
 mongoose.connect(process.env.DB_URL).then(()=>{
    console.log(`database connected succesfully`);
 })
}

module.exports = dbConnection