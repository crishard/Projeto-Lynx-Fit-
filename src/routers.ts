import { Router } from "express";

//usuario
import { CreateClientController } from "./modules/Usuario/CreatUser/CreatUserController";
import { FindUserController } from "./modules/Usuario/FindUser/FindUserController";
import { UpdateUserController } from "./modules/Usuario/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./modules/Usuario/DeleteUser/DeleteUserController";
//treino
import { CreateTreinoController } from "./modules/Treino/CreatTreino/CreatTreinoController";
import { FindTreinoController } from "./modules/Treino/FindTreino/FindTreinoController";
import { UpdateTreinoController } from "./modules/Treino/UpdateTreino/UpdateTreinoController";
import { DeleteTreinoController } from "./modules/Treino/DeleteTreino/DeleteTreinoController";
const routes = Router();

//usuário
const createClientController = new CreateClientController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

//treino
const createTreinoController = new CreateTreinoController();
const findTeinoController = new FindTreinoController();
const updateTreinoController = new UpdateTreinoController();
const deleteTreinoController = new DeleteTreinoController();

//usuario
routes.post("/client/", createClientController.handle);
routes.get("/getuser", findUserController.handle);
routes.put("/update", updateUserController.handle);
routes.delete("/delete/:id", deleteUserController.handle);

//treino
routes.post("/treino/", createTreinoController.handle);
routes.get("/gettreino", findTeinoController.handle);
routes.put("/updatetreino", updateTreinoController.handle);
routes.delete("/deletetreino/:id", deleteTreinoController.handle);
export {routes};