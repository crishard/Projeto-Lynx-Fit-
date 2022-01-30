import { Request, Response } from "express";
import { UpdateCliente } from "./AtualizarCliente";

export class UpdateClienteController {
  async handle(req: Request, res: Response) {
    const {id,nome,email,senha, cnpj} = req.body;
    const updateCliente = new UpdateCliente();
    const result = await updateCliente.execute({
      id,
      nome,
      email,
      senha,
      cnpj
    });
    return res.json(result);
  }
}