import { Request, Response } from "express";
import { LoginCliente } from "./LoginCliente";

export class ValidacaoClienteController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const loginCliente = new LoginCliente();
    const resultado = await loginCliente.execute({
      email,
      senha,
    });
    if( resultado instanceof Error){
      return res.status(400).json(resultado.message)
    }
    return res.json(resultado);
  }
}