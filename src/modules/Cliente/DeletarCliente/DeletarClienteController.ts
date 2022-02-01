import { Request, Response } from "express";
import { DeletarCliente } from "./DeletarCliente";

export class DeletarClienteController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deletarCliente = new DeletarCliente();
      const resultado = await deletarCliente.execute({
        id
      });
      return res.json(resultado);
    }
  }