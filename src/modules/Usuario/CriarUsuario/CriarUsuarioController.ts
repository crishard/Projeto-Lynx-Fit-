import { Request, Response } from "express";
import { CriarUsuario } from "./CriarUsuario";

export class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    const { nome,email,senha} = req.body;
    const criarUsuario = new CriarUsuario();
    const resultado = await criarUsuario.execute({
      nome,
      email,
      senha,
      id_client: req.id_client
    });
    if( resultado instanceof Error){
      return res.status(400).json(resultado.message)
    }
    return res.json(resultado);
  }
}