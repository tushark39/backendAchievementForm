const mongoose = require('mongoose');

const formCourseModel = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        max: 32
    },
    aemail:{
        type: String,
        max: 32
    },
    course:{
        type: String,
    },
    branch: {
        type: String,
    },
    sem: {
        type: String,
    },
    evs: {
        type: String,
    },
    am: {
        type: String,
    },
    dels: {
        type: String,
    },
    efe: {
        type: String,
    },
    em: {
        type: String,
    },
    ep: {
        type : String,
    },
    icpc: {
        type: String,
    },
    usfe: {
        type: String,
    },
    french: {
        type: String,
    },
    ipr: {
        type: String,
    },
    mf: {
        type: String,
    },
    interiorDesign: {
        type: String,
    },
    designProcess: {
        type: String,
    },
    pj: {
        type: String,
    },
    hr: {
        type: String
    }
},{
    timestamps: true
});

const formCourse = mongoose.model('formCourseModel',formCourseModel);

module.exports = formCourse;