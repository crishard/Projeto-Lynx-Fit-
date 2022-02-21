import { Request, Response } from "express";
import { DeletarCliente } from "./DeletarCliente";

export class DeletarClienteController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deletarCliente = new DeletarCliente();
      const resultado = await deletarCliente.execute({
        id
      });
      if( resultado instanceof Error){
        return res.status(400).json(resultado.message)
      }
      return res.json(resultado);
    }
  }