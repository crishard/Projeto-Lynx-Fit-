//Imports
import { Router } from "express";

//usuario
import { CriarUsuarioController } from "./modules/Usuario/CriarUsuario/CriarUsuarioController";
import { BuscarUsuarioController } from "./modules/Usuario/BuscarUsuario/BuscarUsuarioController";
import { AtualizarUsuarioController } from "./modules/Usuario/AtualizarUsuario/AtualizarUsuarioController";
import { DeletarUsuarioController } from "./modules/Usuario/DeletarUsuario/DeletarUsuarioController";
import { BuscarDadosUsuarioController} from "./modules/Usuario/BuscarDadosUsuario/BuscarDadosUsuarioController";

//treino
import { CriarTreinoController } from "./modules/Treino/CriarTreino/CriarTreinoController";
import { BuscarTreinoController } from "./modules/Treino/BuscarTreino/BuscarTreinoController";
import { DeletarTreinoController } from "./modules/Treino/DeletarTreino/DeletarTreinoController";
import { BuscarTreinoUsuarioController } from "./modules/Treino/BuscarTreinoUsuario/BuscarTreinoUsuarioController";

// Cliente
import { CriarClienteController } from "./modules/Cliente/CriarCliente/CriarClienteController";
import { BuscarClienteController } from "./modules/Cliente/BuscarCliente/BuscarClienteController";
import { AtualizarClienteController } from "./modules/Cliente/AtualizarCliente/AtualizarClienteController";
import { DeletarClienteController } from "./modules/Cliente/DeletarCliente/DeletarClienteController";
import { AutenticacaoCliente } from "./middleware/AutenticacaoCliente";

//Equipamentos
import { CriarEquipamentoController } from "./modules/Equipamentos/CriarEquipmento/CriarEquipamentController";
import { BuscarEquipamentoController } from "./modules/Equipamentos/BuscarEquipamento/BuscarEquipamentoController";
import { DeletarEquipamentoController } from "./modules/Equipamentos/DeletarEquipamento/DeletarEquipamentoController";

//Medidas
import { AdicionarMedidasController } from "./modules/Medidas/AdicionarMedidadas/AdicionarMedidasController";
import { BuscarMedidasController } from "./modules/Medidas/BuscarMedidas/BuscarMedidasController"
import { AutenticacaoUsuario } from "./middleware/AutenticacaoUsuario";

//login
import {LoginController} from "./modules/Login/LoginController"

//metodos
const routes = Router();

//usuário
const criarUsuarioController = new CriarUsuarioController();
const buscarUsuarioController = new BuscarUsuarioController();
const atualizarUsuarioController = new AtualizarUsuarioController();
const deletarUsuarioController = new DeletarUsuarioController();
const buscarDadosUsuarioController = new BuscarDadosUsuarioController();

//treino
const createTreinoController = new CriarTreinoController();
const findTeinoController = new BuscarTreinoController();
const deleteTreinoController = new DeletarTreinoController();
const buscarTreinoUsuarioController = new BuscarTreinoUsuarioController();

// Cliente
const createClienteController = new CriarClienteController();
const buscarClienteController = new BuscarClienteController();
const atualizarClienteController = new AtualizarClienteController();
const deletarClienteController = new DeletarClienteController();

//Equipamento
const criarEquipamentoController = new CriarEquipamentoController();
const buscarEquipamentoController = new BuscarEquipamentoController();
const deletarEquipamentoController = new DeletarEquipamentoController();

//Medidas
const adicionarMedidasController = new AdicionarMedidasController();
const buscarMedidasController = new BuscarMedidasController();

// login
const login = new LoginController();

//rotas

//usuario
routes.post("/cliente/criar_usuario",AutenticacaoCliente,criarUsuarioController.handle);
routes.get("/cliente/buscar_usuario", AutenticacaoCliente, buscarUsuarioController.handle);
routes.put("/cliente/atualizar_usuario", AutenticacaoCliente, atualizarUsuarioController.handle);
routes.delete("/cliente/deletar_usuario/:id", AutenticacaoCliente, deletarUsuarioController.handle);
routes.get("/usuario/dados", AutenticacaoUsuario,buscarDadosUsuarioController.handle);

//treino
routes.post("/cliente/criar_treino",AutenticacaoCliente,createTreinoController.handle);
routes.get("/cliente/buscar_treino",AutenticacaoCliente ,findTeinoController.handle);
routes.delete("/cliente/deletar_treino/:id",AutenticacaoCliente, deleteTreinoController.handle);
routes.get("/treino_usuario/:nome_usuario", buscarTreinoUsuarioController.handle);

// Cliente
routes.post("/criar_cliente",createClienteController.handle);
routes.get("/buscar_cliente",AutenticacaoCliente,buscarClienteController.handle);
routes.put("/atualizar_cliente/:id", AutenticacaoCliente,atualizarClienteController.handle);
routes.delete("/deletar_cliente/:id", AutenticacaoCliente,deletarClienteController.handle);

//Equipamentos
routes.post("/cliente/criar_equipamento",AutenticacaoCliente,criarEquipamentoController.handle);
routes.get("/cliente/buscar_equipamento",AutenticacaoCliente,buscarEquipamentoController.handle);
routes.delete("/cliente/deletar_equipamento/:id_equipamento",AutenticacaoCliente,deletarEquipamentoController.handle);

//Medidas
routes.post("/usuario/adicionar_medidas", AutenticacaoUsuario, adicionarMedidasController.handle);
routes.get("/usuario/ver_medidas", AutenticacaoUsuario, buscarMedidasController.handle);

//login 
routes.post("/login", login.handle);
export {routes};