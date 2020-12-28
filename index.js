const express = require('express');
const app = express();
const formRouter = require('./formRouter/userForm');
const courseForm = require('./formRouter/courseForm');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
//start database
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(()=>console.log("database connected"));
//use form router
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(courseForm);
app.use(formRouter);
//use middleware

//listen to port
app.listen(port,()=>{
    console.log(`Port working on ${port}`)
});