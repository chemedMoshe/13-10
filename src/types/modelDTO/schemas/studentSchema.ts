import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    //cange in list 
    className: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Student", studentSchema);