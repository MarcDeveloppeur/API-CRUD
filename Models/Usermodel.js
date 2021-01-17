const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
  Email:{type:String,required:true,unique:true},
  MotDePasse:{type:String,required:true}
},{timestamps:true});

module.exports=mongoose.model("usermodel",userSchema);
