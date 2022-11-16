const express = require('express');
const router = express.Router(); //routing function
const DATA = require('../models/student');

//students full list read
router.get('/api/studentlist', async (req, res) => {
    try {
        const list = await DATA.find()
        res.send(list);
    } catch (error) {
        console.log(error)
    }
})

// single student
router.get('/api/student/:id', async (req, res) => {
    try {
        let id = req.params.id
        const singleStudent = await DATA.findById(id);
        res.send(singleStudent);
    } catch (error) {
        console.log(error)
    }
})

//student add
router.post('/api/student', async (req, res) => {
    try {
        console.log(req.body);
        let item = { //to switch and data fetch from front end in server
            name: req.body.name,
            age: req.body.age
        }


        const newStudent = new DATA(item); //to check incoming data
        const saveStudent = await newStudent.save(); //mongodb save
        res.send(saveStudent);

    } catch (error) {
        console.log(error);
    }
})


// student delete
router.delete('/api/student/:id', async (req, res) => {
    try {
        //  let id = req.params.id;
        //  const deleteStudent = await DATA.findByIdAndDelete(id);
        const deleteStudent = await DATA.deleteOne({ _id: req.params.id });
        res.send(deleteStudent);
    } catch (error) {
        console.log(error)
    }
})



// student update

router.put('/api/student', async (req, res) => {
    try {

        let id = req.body._id
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            age: req.body.age
        }
        let updateData = { $set: item }

        const updateStudent = await DATA.findByIdAndUpdate({ _id: id }, updateData)
        res.send(updateStudent)
    } catch (error) {
        console.log(error)

    }
})


module.exports = router;