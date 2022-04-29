import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//importing routes from ./routes/:
import studentRoutes from './routes/student.js';

const app = express(); //made variable app object of type express object package
const CONNECTION_URL = 'mongodb+srv://mernstacktest:t8swJhCKI575aIGh@cluster0.bagne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
//     });

app.use(cors());
app.use(bodyParser.json({limit: "20mb", extended: true})); //limit: 20MB, extended: true - makes everything go through the parser(if extended: false it will only accept strings)
app.use(bodyParser.urlencoded({limit: "20mb", extended: true})); //limit: 20MB, extended: true - makes everything go through the parser(if extended: false it will only accept strings)
app.use('/students',studentRoutes);

//promise that connects MongoDB Database 
mongoose.connect(CONNECTION_URL, {
    UseNewUrlParser:true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Connection is established and is running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);