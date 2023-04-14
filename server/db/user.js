const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    "name":String,
    "email":String,
    "number":String,
    "address":String
})
module.exports=mongoose.model('student',userSchema)