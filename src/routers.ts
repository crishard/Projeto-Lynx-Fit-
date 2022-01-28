import { Router } from "express";

//usuario
import { CreateUserController } from "./modules/Usuario/CreatUser/CreatUserController";
import { FindUserController } from "./modules/Usuario/FindUser/FindUserController";
import { UpdateUserController } from "./modules/Usuario/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./modules/Usuario/DeleteUser/DeleteUserController";
import { ValidacaoUsuarioController} from "./modules/Validacao/ValidacaoUsuario/ValidacaoUsuarioController"

//treino
import { CreateTreinoController } from "./modules/Treino/CreatTreino/CreatTreinoController";
import { FindTreinoController } from "./modules/Treino/FindTreino/FindTreinoController";
import { UpdateTreinoController } from "./modules/Treino/UpdateTreino/UpdateTreinoController";
import { DeleteTreinoController } from "./modules/Treino/DeleteTreino/DeleteTreinoController";

// Cliente
import { CreateClienteController } from "./modules/Cliente/CreateCliente/CreateClienteController";
import { FindClienteController } from "./modules/Cliente/FindCliente/FindClienteController";
import { UpdateClienteController } from "./modules/Cliente/UpdateCliente/UpdateClienteController";
import { DeleteClienteController } from "./modules/Cliente/DeleteCliente/DeleteClienteController";
import { ensureAuthenticateCliente } from "./middleware/ensureAuthenticateCliente";
import { ValidacaoClienteController } from "./modules/Validacao/ValidacaoCliente/ValidacaoClienteController";

//Equipamentos
import { CreateEquipamentController } from "./modules/Equipamentos/CreateEquipmento/CreateEquipamentController";
import { ReadEquipamentController } from "./modules/Equipamentos/ReadEquipamento/ReadEquipamentController";
import { UpdateEquipamentController } from "./modules/Equipamentos/UpDateEquipamento/UpdateEquipamentController";
import { DeleteEquipamentController } from "./modules/Equipamentos/DeleteEquipamento/DeleteEquipamentController";

const routes = Router();

//usuário
const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const validacaoUsuarioController = new ValidacaoUsuarioController();

//treino
const createTreinoController = new CreateTreinoController();
const findTeinoController = new FindTreinoController();
const updateTreinoController = new UpdateTreinoController();
const deleteTreinoController = new DeleteTreinoController();

// Cliente
const createClienteController = new CreateClienteController();
const findClienteController = new FindClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();
const validacaoClienteController = new ValidacaoClienteController();

//Equipamento
const createEquipamentController = new CreateEquipamentController();
const readEquipamentController = new ReadEquipamentController();
const updateEquipamentController = new UpdateEquipamentController();
const deleteEquipamentController = new DeleteEquipamentController();

//usuario
routes.post("/cliente/usuario",ensureAuthenticateCliente,createUserController.handle);
routes.post("/usuario/autenticar", validacaoUsuarioController.handle);
routes.get("/cliente/buscaruser", findUserController.handle);
routes.put("/cliente/update", updateUserController.handle);
routes.delete("/cliente/delete/:id", deleteUserController.handle);

//treino
routes.post("/treino/",createTreinoController.handle);
routes.get("/gettreino", findTeinoController.handle);
routes.put("/updatetreino", updateTreinoController.handle);
routes.delete("/deletetreino/:id", deleteTreinoController.handle);

// Cliente
routes.post("/cliente/",createClienteController.handle);
routes.get("/getcliente", findClienteController.handle);
routes.put("/updatecliente", updateClienteController.handle);
routes.delete("/deletecliente/:id", deleteClienteController.handle);
routes.post("/cliente/autenticar", validacaoClienteController.handle);

//Equipamentos
routes.post("/cliente/equipamento",ensureAuthenticateCliente,createEquipamentController.handle);
routes.get("/cliente/buscar_equipamento",ensureAuthenticateCliente,readEquipamentController.handle);
routes.put("/cliente/update_equipamento",ensureAuthenticateCliente,updateEquipamentController.handle);
routes.delete("/cliente/delete_equipamento/:id_equipamento",ensureAuthenticateCliente,deleteEquipamentController.handle);


export {routes};