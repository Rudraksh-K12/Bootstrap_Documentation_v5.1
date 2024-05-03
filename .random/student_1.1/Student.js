const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    Name: String,
    RollNo: String,
    WAD: Number,
    DSBDA: Number,
    CNS: Number,
    CC: Number,
    AI: Number
})

const studentModel = mongoose.model('student',studentSchema)

module.exports = studentModel