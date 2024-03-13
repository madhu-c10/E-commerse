const express = require('express');
const app = express();
const dotenv=require('dotenv');
const path = require('path');
const connectDataBase = require('./config/databaseConnect');

dotenv.config({path:path.join(__dirname,"config","config.env")})

connectDataBase()

const products = require('./routes/product');
const order = require('./routes/order')

app.use('/',products)
app.use('/',order)


app.listen(process.env,()=>{
    console.log(`server listening ${process.env.PORT}`)
})