const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


// Create an user/student (Async-await method)
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
 }); 
 
 // Get all users/students
router.get("/students", async (req, res) => {
    try {
        const showUsers = await Student.find();
        res.send(showUsers);
    } catch (error) {
        res.send(error);
    }
 }); 
 
  // Get a user/student by ID
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const showUser = await Student.findById(_id);

        if(!showUser) {
            res.status(404).send();
        } else {
            res.send(showUser);
        }
        res.send(showUser);
    } catch (error) {
        res.status(500).send(error);
    }
 }); 

 // Update data
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const updateUser = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateUser);
    } catch (error) {
        res.status(404).send(error);
    }
});

// Delete a user/student
router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const deleteUser = await Student.findByIdAndDelete(_id);

        if(!_id) {
            return res.status(404).send();
        }
        res.send(deleteUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;