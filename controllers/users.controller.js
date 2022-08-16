import { pool } from "../db.js";

export const getUsers = async (req,res)=>{
  try{
    const [row] = await pool.query("SELECT * FROM users");
    res.json(row);
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

export const getUserById = async (req,res)=>{
  try{
    const [row] = await pool.query("SELECT * FROM users WHERE id = ?",[req.params.id]);
    res.json(row);
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

export const postUsers = async (req,res)=>{
  try{
    const [row] = await pool.query(`INSERT INTO users SET ?;`,[req.body]);
    res.json(row);
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

export const deleteUsers = async (req,res)=>{
  try{
    const [row] = await pool.query(`DELETE FROM users WHERE id = ?;`,[req.params.id]);
    res.json(row);
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

