import { Request, Response } from "express";
import { AtualizarCliente } from "./AtualizarCliente";

export class AtualizarClienteController {
  async handle(req: Request, res: Response) {
    const {nome,email,senha, cnpj} = req.body;
    const {id} = req.params;
    const atualizarCliente = new AtualizarCliente();
    const result = await atualizarCliente.execute({
      id,
      nome,
      email,
      senha,
      cnpj
    });
    if( result instanceof Error){
      return res.status(400).json(result.message)
    }
    return res.json(result);
  }
}