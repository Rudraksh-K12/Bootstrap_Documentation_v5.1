const express = require('express')
const router = express.Router()
const {getAllStudentData,addData,getStudentsMarksgtDSBDA,
    updateMarks,getAllStudentDataGt25,deleteStudent} = require('./StudentController')

router.get('/',getAllStudentData)
router.post('/',addData)
router.delete('/',deleteStudent)
router.get('/dsbdagreaterthan25/',getStudentsMarksgtDSBDA)
router.put('/updatemarks/',updateMarks)
router.get('/getAllStudentDataGt25/',getAllStudentDataGt25)

module.exports = router