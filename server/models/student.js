import mongoose from 'mongoose';

//define Schema in Object
const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }
});

//creating a model:
const student = mongoose.model('student', studentSchema);

//exporting the model:
export default student;