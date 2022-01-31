import { Router } from "express";

//usuario
import { CreateUserController } from "./modules/Usuario/CriarUsuario/CriarUsuarioController";
import { FindUserController } from "./modules/Usuario/BuscarUsuario/BuscarUsuarioController";
import { UpdateUserController } from "./modules/Usuario/AtualizarUsuario/AtualizarUsuarioController";
import { DeleteUserController } from "./modules/Usuario/DeletarUsuario/DeletarUsuarioController";
import { ValidacaoUsuarioController} from "./modules/Login/LoginUsuario/LoginUsuarioController"

//treino
import { CreateTreinoController } from "./modules/Treino/CriarTreino/CriarTreinoController";
import { FindTreinoController } from "./modules/Treino/BuscarTreino/BuscarTreinoController";
import { UpdateTreinoController } from "./modules/Treino/AtualizarTreino/AtualizarTreinoController";
import { DeleteTreinoController } from "./modules/Treino/DeletarTreino/DeletarTreinoController";

// Cliente
import { CreateClienteController } from "./modules/Cliente/CriarCliente/CriarClienteController";
import { FindClienteController } from "./modules/Cliente/BuscarCliente/BuscarClienteController";
import { UpdateClienteController } from "./modules/Cliente/AtualizarCliente/AtualizarClienteController";
import { DeleteClienteController } from "./modules/Cliente/DeletarCliente/DeletarClienteController";
import { ensureAuthenticateCliente } from "./middleware/AutenticacaoCliente";
import { ValidacaoClienteController } from "./modules/Login/LoginCliente/LoginClienteController";

//Equipamentos
import { CreateEquipamentController } from "./modules/Equipamentos/CriarEquipmento/CriarEquipamentController";
import { ReadEquipamentController } from "./modules/Equipamentos/BuscarEquipamento/BuscarEquipamentoController";
import { UpdateEquipamentController } from "./modules/Equipamentos/AtualizarEquipamento/AtualizarEquipamentoController";
import { DeleteEquipamentController } from "./modules/Equipamentos/DeletarEquipamento/DeletarEquipamentoController";

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
routes.post("/cliente/cria/treino",ensureAuthenticateCliente,createTreinoController.handle);
routes.get("/cliente/ver/treino",ensureAuthenticateCliente ,findTeinoController.handle);
routes.put("/cliente/atualizar/treino", ensureAuthenticateCliente, updateTreinoController.handle);
routes.delete("/cliente/delete/treino/:id",ensureAuthenticateCliente, deleteTreinoController.handle);

// Cliente
routes.post("/criar_cliente/",createClienteController.handle);
routes.get("/ver_cliente", findClienteController.handle);
routes.put("/update_cliente", updateClienteController.handle);
routes.delete("/delete_cliente/:id", deleteClienteController.handle);
routes.post("/cliente/autenticar", validacaoClienteController.handle);
//Equipamentos
routes.post("/cliente/equipamento",ensureAuthenticateCliente,createEquipamentController.handle);
routes.get("/cliente/buscar_equipamento",ensureAuthenticateCliente,readEquipamentController.handle);
routes.put("/cliente/update_equipamento",ensureAuthenticateCliente,updateEquipamentController.handle);
routes.delete("/cliente/delete_equipamento/:id_equipamento",ensureAuthenticateCliente,deleteEquipamentController.handle);


export {routes};