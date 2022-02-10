//Imports
import { Router } from "express";

//usuario
import { CriarUsuarioController } from "./modules/Usuario/CriarUsuario/CriarUsuarioController";
import { BuscarUsuarioController } from "./modules/Usuario/BuscarUsuario/BuscarUsuarioController";
import { AtualizarUsuarioController } from "./modules/Usuario/AtualizarUsuario/AtualizarUsuarioController";
import { DeletarUsuarioController } from "./modules/Usuario/DeletarUsuario/DeletarUsuarioController";
import { LoginUsuarioController} from "./modules/Login/LoginUsuario/LoginUsuarioController";
import { BuscarDadosUsuarioController} from "./modules/Usuario/BuscarDadosUsuario/BuscarDadosUsuarioController";

//treino
import { CriarTreinoController } from "./modules/Treino/CriarTreino/CriarTreinoController";
import { BuscarTreinoController } from "./modules/Treino/BuscarTreino/BuscarTreinoController";
import { AtualizarTreinoController } from "./modules/Treino/AtualizarTreino/AtualizarTreinoController";
import { DeletarTreinoController } from "./modules/Treino/DeletarTreino/DeletarTreinoController";
import { BuscarTreinoUsuarioController } from "./modules/Treino/BuscarTreinoUsuario/BuscarTreinoUsuarioController";

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

//Medidas
import { AdicionarMedidasController } from "./modules/BackUsuario/AdicionarMedidadas/AdicionarMedidasController";
import { BuscarMedidasController } from "./modules/BackUsuario/BuscarMedidas/BuscarMedidasController"
import { AutenticacaoUsuario } from "./middleware/AutenticacaoUsuario";


//metodos
const routes = Router();

//usuário
const criarUsuarioController = new CriarUsuarioController();
const buscarUsuarioController = new BuscarUsuarioController();
const atualizarUsuarioController = new AtualizarUsuarioController();
const deletarUsuarioController = new DeletarUsuarioController();
const validacaoUsuarioController = new LoginUsuarioController();
const buscarDadosUsuarioController = new BuscarDadosUsuarioController();

//treino
const createTreinoController = new CriarTreinoController();
const findTeinoController = new BuscarTreinoController();
const updateTreinoController = new AtualizarTreinoController();
const deleteTreinoController = new DeletarTreinoController();
const buscarTreinoUsuarioController = new BuscarTreinoUsuarioController();

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

//Medidas
const adicionarMedidasController = new AdicionarMedidasController();
const buscarMedidasController = new BuscarMedidasController();

//rotas

//usuario
routes.post("/cliente/criar_usuario",AutenticacaoCliente,criarUsuarioController.handle);
routes.post("/usuario/autenticar", validacaoUsuarioController.handle);
routes.get("/cliente/buscar_usuario", buscarUsuarioController.handle);
routes.put("/cliente/atualizar_usuario", atualizarUsuarioController.handle);
routes.delete("/cliente/deletar_usuario/:id", deletarUsuarioController.handle);
routes.get("/usuario/dados", buscarDadosUsuarioController.handle);

//treino
routes.post("/cliente/criar_treino",AutenticacaoCliente,createTreinoController.handle);
routes.get("/cliente/buscar_treino",AutenticacaoCliente ,findTeinoController.handle);
routes.put("/cliente/atualizar_treino", AutenticacaoCliente, updateTreinoController.handle);
routes.delete("/cliente/deletar_treino/:id",AutenticacaoCliente, deleteTreinoController.handle);
routes.delete("/cliente/treino_usuario/",AutenticacaoCliente, buscarTreinoUsuarioController.handle);

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

//Medidas
routes.post("/usuario/adicionar_medidas", AutenticacaoUsuario, adicionarMedidasController.handle);
routes.get("/usuario/ver_medidas", AutenticacaoUsuario, buscarMedidasController.handle);

export {routes};