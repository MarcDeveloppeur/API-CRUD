const mongoose=require('mongoose');

const etudiantSchema=mongoose.Schema({
  Nom:{type:String,required:true},
  Prenom:{type:String,required:true},
  Age:{type:Number,required:true},
  Classe:{type:String,required:true},
  NumeroEnClasse:{type:Number,required:true}
},{timestamps:true});

module.exports=mongoose.model("etudiantmodel",etudiantSchema);
