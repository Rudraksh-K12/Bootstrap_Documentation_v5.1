const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const studentroutes = require('./studentroutes')


const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log(`Hurray Db Connected !!!`)})
    .catch((e)=>{
        console.log(`ERROR : ${e}`);
    })

app.use('/allstudents',studentroutes);

app.listen(PORT,()=>{
    console.log(`App running on port number ${PORT}`)
})