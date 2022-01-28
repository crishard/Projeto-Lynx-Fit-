import { Request, Response } from "express";
import { ValidacaoCliente } from "./ValidacaoCliente";

export class ValidacaoClienteController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const validacaoCliente = new ValidacaoCliente();
    const result = await validacaoCliente.execute({
      email,
      senha,
    });
    return res.json(result);
  }
}