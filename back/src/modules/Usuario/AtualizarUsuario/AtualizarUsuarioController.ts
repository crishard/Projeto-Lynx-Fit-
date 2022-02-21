import { Request, Response } from "express";
import { AtualizarUsuario } from "./AtualizarUsuario";

export class AtualizarUsuarioController {
  async handle(req: Request, res: Response) {
    const {id,nome,email,senha} = req.body;
    const atualizarUsuario = new AtualizarUsuario();
    const resultado = await atualizarUsuario.execute({
      id,
      nome,
      email,
      senha,
    });
    if( resultado instanceof Error){
      return res.status(400).json(resultado.message)
    }
    return res.json(resultado);
  }
}