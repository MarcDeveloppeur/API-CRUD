const jwt=require('jsonwebtoken');

const Auth=(req,res,next)=>{
  try {
    const token=req.headers.authorization.split(' ')[1];
    const decodedToken=jwt.verify(token,'secretKey');
    if(decodedToken.administrateur==true){
      next();
    }else{
      res.status(300).send({message:"Vous n'avez pas le droit d'acceder à ces informations"});
    }
  } catch (e) {
      res.status(300).send({message:"Vous n'avez pas le droit d'acceder à ces informations"});
  }
}

module.exports=Auth;
