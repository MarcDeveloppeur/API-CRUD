const etudiantmodel=require('../Models/etudiantmodel');

//ajouter un etudiant controlleur
exports.ajouter=(req,res)=>{
      if(req.body){
        model=new etudiantmodel({
             ...req.body
        })
         model.save()
         .then(()=>res.status(200).send('Elève enregistré avec success'))
         .catch((err)=>console.log(err));
    }
}
//liste de tous les etudiants
exports.liste=(req,res)=>{
     etudiantmodel.find()
     .then((data)=>{
       res.status(200).send(data);
     }).catch((err)=>console.log(err));
}
//rechercher des etudiants selon leurs nom
exports.rechercher=(req,res)=>{
    etudiantmodel.find({Nom:req.params.nom})
    .then((data)=>{
      res.status(200).send(data)
    }).catch(()=>console.log("l'élève que vous cherché n'est mas dans la base de donnée"));
}
//supprimer un étudiant
exports.supprimer=(req,res)=>{
  etudiantmodel.remove({_id:req.params.id})
  .then(()=>{
    res.status(200).send({message:"Suppression éffectuée avec success"});
  })
  .catch((err)=>console.log(err));
}
//editer un etudiant
exports.modifier=(req,res)=>{
  etudiantmodel.findOneAndUpdate({_id:req.params.id},{
    ...req.body
  }).then(()=>res.status(200).send("Mise à jours éffectué"))
  .catch((err)=>console.log(err));
}
