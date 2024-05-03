const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const songroutes = require('./songroutes')

MONGO_URI = 'mongodb://localhost:27017/music_1'
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect(MONGO_URI)
    .then(()=>{console.log('Hurray !!')})
    .catch((e) => {
        console.log('Error: ')
    })

const PORT = 8000
app.use('/songs',songroutes)
app.listen(PORT,()=>{
    console.log(`Running on PORT : ${PORT}`)
})