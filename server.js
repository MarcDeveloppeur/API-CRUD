const express=require('express');
const app=express();
const mongoose=require('mongoose');
const etudiantrouter=require('./Routes/etudiantRouter');
const userRouter=require('./Routes/userRouter');
const Auth=require('./Middleware/Auth');
const port=5000;

app.use(express.json());

//se connecter avec mongodb
mongoose.connect("mongodb://127.0.0.1:27017/ecoleDb")
.then(()=>console.log("connection a mongodb éffectué avec success"))
.catch((err)=>console.log(err));

//etudiant routes
app.use('/etudiant/',Auth,etudiantrouter);
//utilisateur Routes
app.use('/Utilisateur/',userRouter);
//connecter le server sur le port 5000
app.listen(port,()=>console.log("server connecté sur le port"+port));
