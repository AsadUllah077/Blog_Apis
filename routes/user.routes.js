import { createUser, getUsers } from "../controllers/user.controller.js";
import { getUser } from "../controllers/user.controller.js";

export default  (app)=>{
     app.post('/user/create/new', createUser);
     app.get('/user/:name', getUser);
     app.get('/users',getUsers);
}