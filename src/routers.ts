import { Router } from "express";

//usuario
import { CreateUserController } from "./modules/Usuario/CriarUsuario/CriarUsuarioController";
import { FindUserController } from "./modules/Usuario/BuscarUsuario/BuscarUsuarioController";
import { UpdateUserController } from "./modules/Usuario/AtualizarUsuario/AtualizarUsuarioController";
import { DeleteUserController } from "./modules/Usuario/DeletarUsuario/DeletarUsuarioController";
import { LoginUsuarioController} from "./modules/Login/LoginUsuario/LoginUsuarioController"

//treino
import { CriarTreinoController } from "./modules/Treino/CriarTreino/CriarTreinoController";
import { BuscarTreinoController } from "./modules/Treino/BuscarTreino/BuscarTreinoController";
import { AtualizarTreinoController } from "./modules/Treino/AtualizarTreino/AtualizarTreinoController";
import { DeletarTreinoController } from "./modules/Treino/DeletarTreino/DeletarTreinoController";

// Cliente
import { CreateClienteController } from "./modules/Cliente/CriarCliente/CriarClienteController";
import { FindClienteController } from "./modules/Cliente/BuscarCliente/BuscarClienteController";
import { UpdateClienteController } from "./modules/Cliente/AtualizarCliente/AtualizarClienteController";
import { DeleteClienteController } from "./modules/Cliente/DeletarCliente/DeletarClienteController";
import { AutenticacaoCliente } from "./middleware/AutenticacaoCliente";
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
const validacaoUsuarioController = new LoginUsuarioController();

//treino
const createTreinoController = new CriarTreinoController();
const findTeinoController = new BuscarTreinoController();
const updateTreinoController = new AtualizarTreinoController();
const deleteTreinoController = new DeletarTreinoController();

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
routes.post("/cliente/usuario",AutenticacaoCliente,createUserController.handle);
routes.post("/usuario/autenticar", validacaoUsuarioController.handle);
routes.get("/cliente/buscaruser", findUserController.handle);
routes.put("/cliente/update", updateUserController.handle);
routes.delete("/cliente/delete/:id", deleteUserController.handle);

//treino
routes.post("/cliente/cria/treino",AutenticacaoCliente,createTreinoController.handle);
routes.get("/cliente/ver/treino",AutenticacaoCliente ,findTeinoController.handle);
routes.put("/cliente/atualizar/treino", AutenticacaoCliente, updateTreinoController.handle);
routes.delete("/cliente/delete/treino/:id",AutenticacaoCliente, deleteTreinoController.handle);

// Cliente
routes.post("/criar_cliente/",createClienteController.handle);
routes.get("/ver_cliente", findClienteController.handle);
routes.put("/update_cliente", updateClienteController.handle);
routes.delete("/delete_cliente/:id", deleteClienteController.handle);
routes.post("/cliente/autenticar", validacaoClienteController.handle);
//Equipamentos
routes.post("/cliente/equipamento",AutenticacaoCliente,createEquipamentController.handle);
routes.get("/cliente/buscar_equipamento",AutenticacaoCliente,readEquipamentController.handle);
routes.put("/cliente/update_equipamento",AutenticacaoCliente,updateEquipamentController.handle);
routes.delete("/cliente/delete_equipamento/:id_equipamento",AutenticacaoCliente,deleteEquipamentController.handle);


export {routes};