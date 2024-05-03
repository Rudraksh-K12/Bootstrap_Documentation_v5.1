const express = require('express')

const  {getAllStudentsData, addStudentData, dsbdaGt25, updateMarks, marksGt25, deleteStudent} = require('./studentController')

const router = express.Router()

router.get('/',getAllStudentsData);
router.post('/addStudentData', addStudentData)
router.get('/dsbda',dsbdaGt25)
router.put('/updateStudent',updateMarks)
router.get('/gt25',marksGt25)
router.delete('/delStud',deleteStudent)

module.exports = router