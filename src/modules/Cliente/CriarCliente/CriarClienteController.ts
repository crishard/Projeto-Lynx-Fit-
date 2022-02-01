import { Request, Response } from "express";
import { CriarCliente } from "./CriarCliente";

export class CriarClienteController {
  async handle(req: Request, res: Response) {
    const { nome,email,senha, cnpj} = req.body;
    const criarCliente = new CriarCliente();
    const result = await criarCliente.execute({
      nome,
      email,
      senha,
      cnpj,
    });
    return res.json(result);
  }
}