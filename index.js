import express from 'express';
import userRoute from './routes/user.routes.js';
import loginRoute from './routes/login.routes.js';
const app = express();
const PORT = 3004;

app.use(express.json());

app.listen(PORT, ()=>{
  console.log("Connected in http://localhost:"+PORT);
});

app.use(userRoute);
app.use(loginRoute);

app.get("/api",(req,res)=>{
  res.send("Hello world!");
});