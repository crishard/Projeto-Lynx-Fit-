import { Request, Response } from "express";
import { LoginCliente } from "./LoginCliente";

export class ValidacaoClienteController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const loginCliente = new LoginCliente();
    const result = await loginCliente.execute({
      email,
      senha,
    });
    return res.json(result);
  }
}