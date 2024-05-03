const mongoose = require('mongoose')
const student = require('./Student')


const getAllStudentsData = async (req,res)=>{
    try{
        const data = await student.find({})
        res.status(200).json({length: data.length, data})
    }catch(err){
        res.status(500).json({message: err})
    }
}

const addStudentData = async (req,res)=>{
    try{
        const data = await student.create({...req.body})
        res.status(200).json({data})
    }catch(err){
        res.status(400).json({message: err})
    }
}


const dsbdaGt25 = async (req,res)=>{
    try{
        const data = await student.find({DSBDA :{$gt: 25}})
        res.status(200).json({data})
    }catch(err){
        res.staus(400).json({message: err})
    }
}

const updateMarks = async (req,res)=>{
    try{
        const data = await student.updateOne(
            { RollNo: req.body.rollNo }, {$inc: {WAD: 10,DSBDA: 10,CNS: 10,CC: 10,AI: 10}}
        );

        res.status(200).json({data})
    }catch(err){
        res.status(400).json({message: err})
    }
}


const marksGt25 = async (req,res)=>{
    try{
        const data = await student.find({DSBDA :{$gt: 25}, 
            $and: [{WAD :{$gt : 25}}, {CNS :{$gt : 25}}, {CC :{$gt : 25}}, {AI :{$gt : 25}}]})

        res.status(200).json({data})
    }catch(err){
        res.status(200).json({message: err})
    }
}

const deleteStudent = async(req,res)=>{
    try{
        const data = await student.deleteOne({RollNo: req.body.rollNo})
        res.status(200).json({data})
    }catch(err){
        res.status(400).json({message: err})
    }
}


module.exports = {getAllStudentsData, addStudentData, dsbdaGt25, updateMarks, marksGt25, deleteStudent}