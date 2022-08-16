import routes from 'express';
import jwt from 'jsonwebtoken';

const route = routes();

route.post("/api/login",(req,res)=>{
  const user = {
    id:1,
    name:"Alex",
    email:"alex@correo.com"
  };

  jwt.sign({user},"secretKey",{expiresIn:"32s"},(err,token)=>{
    res.json({
      token
    });
  });

  // res.json(user);
});

const verifyToken = (req,res,next)=>{
  const bearerHeader = req.headers["authorization"];

  if(bearerHeader === undefined){
    res.sendStatus(403);
  }else{
    const token = bearerHeader.split(" ")[1];
    req.token = token;
    next();
  }
};

route.post("/api/login/post",verifyToken,(req,res)=>{
  jwt.verify(req.token,"secretKey",(err,authData)=>{
    if(err){
      res.sendStatus(403);
    }else{
      res.json({
        message:"Post was created!",
        authData
      });
    }
  })
});

export default route;