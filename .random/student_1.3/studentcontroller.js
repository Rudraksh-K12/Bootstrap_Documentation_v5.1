
const student = require('./student')

const addData = async (req,res) =>{
    try{
        const data = await student.create({...req.body})
        res.status(200).json({data})
    }catch(err){
        res.status(400).json({message: err})
    }
}

const getAllStudentData = async (req,res) => {
    try{
        const data = await student.find({})
        res.status(200).json({length: data.length, data})
    }catch(err){
        res.status(500).json({message: err})
    }
}

const getStudentsMarksgtDSBDA = async (req,res) => {
    try{
        const data = await student.find({
            DSBDA_Marks : {$gt:25}
        })
        res.status(200).json({data});
    }catch(err){
        res.status(500).json({message: err})
    }
}

const updateMarks = async (req,res) => {
    try{
        const data = await student.updateOne(
            {Roll_No : req.body.Roll_No},{$inc: {WAD_Marks: 10, 
                CC_Marks: 10,
                DSBDA_Marks: 10,
                CNS_Marks: 10,
                AI_marks: 10,}}
        )
        res.status(200).json({data});
    }catch(err){
        res.status(500).json({message: err})
    }
}

const getAllStudentDataGt25 = async (req,res) => {
    try{
        const data = await student.find({
            WAD_Marks: {$gt:25}, 
            CC_Marks:{$gt:25},
            DSBDA_Marks: {$gt:25},
            CNS_Marks: {$gt:25},
            AI_marks: {$gt:25}
        })
        req.status(200).json({data})
    }catch(e)
    {
        console.log('INternal server err')
    }
}

const deleteStudent = async(req,res) => {
    try{
        const data = await student.deleteOne({Roll_No: req.body.rollNo})
        res.status(200).json({data})
    }catch(e)
    {
        res.status(500).json({message:'error'})
    }
}


module.exports = {getAllStudentData,addData,getStudentsMarksgtDSBDA,updateMarks,getAllStudentDataGt25,deleteStudent}
