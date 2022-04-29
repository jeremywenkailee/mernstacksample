import express from 'express'
import { getStudents , createStudent, deleteStudent} from '../controllers/student.js';

//import student model:
import student from '../models/student.js';

const router = express.Router();

//Routes:
router.get('/',getStudents); //get command at /
router.post('/',createStudent); //post command at /
router.delete('/:id',deleteStudent); //delete command at /

//exporting the router object
export default router;