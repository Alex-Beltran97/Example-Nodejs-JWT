import dotenv from 'dotenv'
import { createPool } from "mysql2";
dotenv.config()

export const pool = createPool({
  host:"localhost",
  user:"root",
  password:process.env.PASSWORD,
  database:"jwt"
}).promise();
