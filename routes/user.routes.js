import routes from 'express';
import { getUsers,getUserById,postUsers,deleteUsers } from '../controllers/users.controller.js';

const route = routes();

route.get("/api/user",getUsers);
route.get("/api/user/:id",getUserById);
route.post("/api/user",postUsers);
route.delete("/api/user/:id",deleteUsers);

export default route;