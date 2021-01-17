const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');


//enregistrer un nouveau compte utilisateur
router.post('/Enregistrer',userController.Enregistrer);
//se connecter avec un compte
router.post('/SeConnecter',userController.SeConnecter);

module.exports=router;
