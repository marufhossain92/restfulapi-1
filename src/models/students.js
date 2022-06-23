const mongoose = require("mongoose");
const validator = require("validator");

// Create new Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email ID already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        minlength:11,
        unique: true
    },
    city: {
        type: String,
        required: true
    }
})

// Create new (model) collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;