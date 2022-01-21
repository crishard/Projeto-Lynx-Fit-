import { Router } from "express";


import { CreateClientController } from "./modules/Usuario/CreatUser/CreatUserController";
import { FindUserController } from "./modules/Usuario/FindUser/FindUserController";
import { UpdateUserController } from "./modules/Usuario/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./modules/Usuario/DeleteUser/DeleteUserController";
const routes = Router();


const createClientController = new CreateClientController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

routes.post("/client/", createClientController.handle);
routes.get("/getuser", findUserController.handle);
routes.put("/update", updateUserController.handle);
routes.delete("/delete/:id", deleteUserController.handle);


export {routes};