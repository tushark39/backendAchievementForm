const express = require('express');
const formCourse = require('../models/courseForm');
const router = new express.Router();


// const upload = multer({
//     limits:{
//         fileSize:10000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(pdf)$/)){
//             return cb(new Error("file must be of pdf format"))
//         }
//         cb(undefined, true)
//     }
// })
// router.post("form/pdf/:id", upload.any(),async(req, res)=>{
//    console.log(req.files);
//    let file = [];
//    console.lof(req.files)
//    if(req.files){
//        req.files.map((item, index)=>{
//            if(item.fieldname == "document"){
//                file.push(item.push)
//            }
//        });
//    }
//    userForm.findByIdAndUpdate(
//        req.params.id,
//        { $push: { document: file } },
//        { new: true }
//    )
//    .then(data =>{
//        res.status(200).json({
//            status: true
//        })
//    }).catch(console.log)

// })
router.post("/course/form/api", async (req, res) =>{
    const form = new formCourse(req.body);
    try{
        await form.save();
        res.status(201).send(form); 
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router