import { Request, Response } from "express";
import { CreateCliente } from "./CriarCliente";

export class CreateClienteController {
  async handle(req: Request, res: Response) {
    const { nome,email,senha, cnpj} = req.body;
    const createCliente = new CreateCliente();
    const result = await createCliente.execute({
      nome,
      email,
      senha,
      cnpj,
    });
    return res.json(result);
  }
}