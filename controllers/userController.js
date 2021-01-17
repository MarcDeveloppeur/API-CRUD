const usermodel=require('../Models/Usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//créer un nouveau compte utilisateur
exports.Enregistrer=(req,res)=>{
  //verifier si l'adresse Email existe déjà dans la base
   usermodel.find({Email:req.body.Email},(err,data)=>{
     if(!err){
       //crypter le mot de passe avant d'enregistrer le compte
       bcrypt.hash(req.body.MotDePasse,10)
       .then((cryptedData)=>{

            const model=new usermodel({
              Email:req.body.Email,
              MotDePasse:cryptedData
            });
            model.save()
            .then(()=>res.status(200).send({message:"Utilisateur crée avec success"}))
            .catch(()=>res.status(500).send({message:"Erreur d'enregistrement de l'utilisateur"}));
         });

     }else{
    res.status(500).send({message:"cette addresse Email existe déjà"});
     }
   });

}
exports.SeConnecter=(req,res)=>{
  //vérifier si l'email est dans la base
    usermodel.findOne({Email:req.body.Email})
    .then((result)=>{
      //comparer le mot de passe
      bcrypt.compare(result.MotDePasse,req.body.MotDePasse)
      .then(()=>{
        const token=jwt.sign({
          administrateur:true
        },"secretKey",{expiresIn:"24h"});
        res.status(200).send({token:token});
      }).catch(()=>res.status(404).send({message:"Mot de passe incorrect"}));

    })
    .catch(()=>res.status(404).send({message:"Utilisateur non touvé"}));
}
