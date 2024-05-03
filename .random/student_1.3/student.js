const mongoose = require('mongoose')


const StudentModel = mongoose.Schema({
    Name: String, 
    Roll_No: String, 
    WAD_Marks: Number, 
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_marks: Number,
})

module.exports = mongoose.model('student',StudentModel)