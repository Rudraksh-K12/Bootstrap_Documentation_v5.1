const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const studentRoutes = require('./studentRoutes')
mongoose.connect('mongodb://localhost:27017/wad_1')
    .then(()=>{console.log('db connected successfully')})
    .catch((err)=>{console.log(`db connection error: ${err}`)})

app.use(cors())
app.use(express.json())

    
app.use('/students',studentRoutes)

app.listen(3001,()=>{console.log('running on port 30001')})