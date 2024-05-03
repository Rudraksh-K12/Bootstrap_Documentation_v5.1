const express = require('express')
const path = require('path')

const app = express();

app.use(express.static('assets'));

app.listen(3000,() => {
    console.log('Listening port 3000');
})