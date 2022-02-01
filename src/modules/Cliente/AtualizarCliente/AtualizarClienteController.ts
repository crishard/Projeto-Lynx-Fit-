import { Request, Response } from "express";
import { AtualizarCliente } from "./AtualizarCliente";

export class AtualizarClienteController {
  async handle(req: Request, res: Response) {
    const {id,nome,email,senha, cnpj} = req.body;
    const atualizarCliente = new AtualizarCliente();
    const result = await atualizarCliente.execute({
      id,
      nome,
      email,
      senha,
      cnpj
    });
    return res.json(result);
  }
}