import { Router } from "express";


import { CreateClientController } from "./modules/Usuario/CreatUser/CreatUserController";
import { FindUserController } from "./modules/Usuario/FindUser/FindUserController";
import { UpdateUserController } from "./modules/Usuario/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./modules/Usuario/DeleteUser/DeleteUserController";

// Cliente
import { CreateClienteController } from "./modules/Cliente/CreateCliente/CreateClienteController";
import { FindClienteController } from "./modules/Cliente/FindCliente/FindClienteController";
import { UpdateClienteController } from "./modules/Cliente/UpdateCliente/UpdateClienteController";
import { DeleteClienteController } from "./modules/Cliente/DeleteCliente/DeleteClienteController";

const routes = Router();


const createClientController = new CreateClientController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


// Cliente
const createClienteController = new CreateClienteController();
const findClienteController = new FindClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

routes.post("/client/", createClientController.handle);
routes.get("/getuser", findUserController.handle);
routes.put("/update", updateUserController.handle);
routes.delete("/delete/:id", deleteUserController.handle);


// Cliente
routes.post("/cliente/", createClienteController.handle);
routes.get("/getcliente", findClienteController.handle);
routes.put("/updatecliente", updateClienteController.handle);
routes.delete("/deletecliente/:id", deleteClienteController.handle);


export {routes};