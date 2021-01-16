const express=require('express');
const router=express.Router();
const etudiantController=require('../controllers/etudiantControllers');

//Ajouter un etudiant
router.post('/ajouterEtudiant',etudiantController.ajouter);
//liste de tous les etudiant
router.get('/listeEtudiant',etudiantController.liste);
//afficher un étudiant selon son nom
router.get('/rechercher/:nom',etudiantController.rechercher);
//supprimer un étudiant
router.delete('/supprimer/:id',etudiantController.supprimer);
//modifier un étudiant
router.put('/modifier/:id',etudiantController.modifier);

module.exports=router;
