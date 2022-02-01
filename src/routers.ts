import { Router } from "express";

//usuario
import { CriarUsuarioController } from "./modules/Usuario/CriarUsuario/CriarUsuarioController";
import { BuscarUsuarioController } from "./modules/Usuario/BuscarUsuario/BuscarUsuarioController";
import { AtualizarUsuarioController } from "./modules/Usuario/AtualizarUsuario/AtualizarUsuarioController";
import { DeletarUsuarioController } from "./modules/Usuario/DeletarUsuario/DeletarUsuarioController";
import { LoginUsuarioController} from "./modules/Login/LoginUsuario/LoginUsuarioController"

//treino
import { CriarTreinoController } from "./modules/Treino/CriarTreino/CriarTreinoController";
import { BuscarTreinoController } from "./modules/Treino/BuscarTreino/BuscarTreinoController";
import { AtualizarTreinoController } from "./modules/Treino/AtualizarTreino/AtualizarTreinoController";
import { DeletarTreinoController } from "./modules/Treino/DeletarTreino/DeletarTreinoController";

// Cliente
import { CriarClienteController } from "./modules/Cliente/CriarCliente/CriarClienteController";
import { BuscarClienteController } from "./modules/Cliente/BuscarCliente/BuscarClienteController";
import { AtualizarClienteController } from "./modules/Cliente/AtualizarCliente/AtualizarClienteController";
import { DeletarClienteController } from "./modules/Cliente/DeletarCliente/DeletarClienteController";
import { AutenticacaoCliente } from "./middleware/AutenticacaoCliente";
import { ValidacaoClienteController } from "./modules/Login/LoginCliente/LoginClienteController";

//Equipamentos
import { CriarEquipamentoController } from "./modules/Equipamentos/CriarEquipmento/CriarEquipamentController";
import { BuscarEquipamentoController } from "./modules/Equipamentos/BuscarEquipamento/BuscarEquipamentoController";
import { AtualizarEquipamentoController } from "./modules/Equipamentos/AtualizarEquipamento/AtualizarEquipamentoController";
import { DeletarEquipamentoController } from "./modules/Equipamentos/DeletarEquipamento/DeletarEquipamentoController";

const routes = Router();

//usuário
const criarUsuarioController = new CriarUsuarioController();
const buscarUsuarioController = new BuscarUsuarioController();
const atualizarUsuarioController = new AtualizarUsuarioController();
const deletarUsuarioController = new DeletarUsuarioController();
const validacaoUsuarioController = new LoginUsuarioController();

//treino
const createTreinoController = new CriarTreinoController();
const findTeinoController = new BuscarTreinoController();
const updateTreinoController = new AtualizarTreinoController();
const deleteTreinoController = new DeletarTreinoController();

// Cliente
const createClienteController = new CriarClienteController();
const buscarClienteController = new BuscarClienteController();
const atualizarClienteController = new AtualizarClienteController();
const deletarClienteController = new DeletarClienteController();
const validacaoClienteController = new ValidacaoClienteController();

//Equipamento
const criarEquipamentoController = new CriarEquipamentoController();
const buscarEquipamentoController = new BuscarEquipamentoController();
const atualizarEquipamentoController = new AtualizarEquipamentoController();
const deletarEquipamentoController = new DeletarEquipamentoController();

//usuario
routes.post("/cliente/criar_usuario",AutenticacaoCliente,criarUsuarioController.handle);
routes.post("/usuario/autenticar", validacaoUsuarioController.handle);
routes.get("/cliente/buscar_usuario", buscarUsuarioController.handle);
routes.put("/cliente/atualizar_usuario", atualizarUsuarioController.handle);
routes.delete("/cliente/deletar_usuario/:id", deletarUsuarioController.handle);


//treino
routes.post("/cliente/criar_treino",AutenticacaoCliente,createTreinoController.handle);
routes.get("/cliente/buscar_treino",AutenticacaoCliente ,findTeinoController.handle);
routes.put("/cliente/atualizar_treino", AutenticacaoCliente, updateTreinoController.handle);
routes.delete("/cliente/deletar_treino/:id",AutenticacaoCliente, deleteTreinoController.handle);

// Cliente
routes.post("/criar_cliente/",createClienteController.handle);
routes.get("/buscar_cliente", buscarClienteController.handle);
routes.put("/atualizar_cliente", atualizarClienteController.handle);
routes.delete("/deletar_cliente/:id", deletarClienteController.handle);
routes.post("/cliente/autenticar", validacaoClienteController.handle);
//Equipamentos
routes.post("/cliente/criar_equipamento",AutenticacaoCliente,criarEquipamentoController.handle);
routes.get("/cliente/buscar_equipamento",AutenticacaoCliente,buscarEquipamentoController.handle);
routes.put("/cliente/atualizar_equipamento",AutenticacaoCliente,atualizarEquipamentoController.handle);
routes.delete("/cliente/deletar_equipamento/:id_equipamento",AutenticacaoCliente,deletarEquipamentoController.handle);


export {routes};