import student from '../models/student.js';
import StudentData from '../models/student.js';

export const getStudents =  async(req , res) => {
    //try catch block
    //await function - async
    try{
        const allStudents = await StudentData.find();

        //return response as code 200 with all Students in a JSON format
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createStudent = async(req , res) => {
    const student = req.body;

    const newStudent = new StudentData(student);
    try{
        //saves newStudent into the MongoDB database 
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

export const deleteStudent = async(req , res) => {
    const id = req.params.id;

    try{
        await StudentData.findByIdAndRemove(id);
        res.send("Success");
    }
    catch(error){
        console.log(error);
    }
}