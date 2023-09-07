const router = require('express').Router();
// const authController = require('../controller/auth.controller');

// router.post('/register', authController.createUser);
// router.post('/login', authController.logIn);
// router.get('/dashboard', authController.dashBoard);

module.exports = router;







// POST register
//      Se connecter avec UN SEUL email
// POST login
//      16 caractères
//      1 MAJ minimum
//      1 MIN minimum
//      1 chiffre minimum
//      1 chara spé minimum
// GET dashboard

// REGISTER
// router.post('/register', authController.createUser); //

//      1 seul email + vérification
//      Vérification MDP complexe avec regex

// LOGIN
//      Vérification email
//      Vérification MDP (haché en BDD)  Connexion réussie
//      Envoie Token  Message Token envoyé

// DASHBOARD
//      Recup Token
//      Vérification Token si absent, invalide ou présent
//      Si ok : Message de succès

