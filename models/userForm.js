const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        max:32
    },
    amityEmail:{
        type:String,
        max:32
    },
    courseName:{
        type:String
    },
    organisation:{
        type:String
    },
    imageLink:{
        type:String
    },
},{
    timestamps:true
});
const userForm = mongoose.model('userFormSchema',userFormSchema);

module.exports = userForm;

