import { Request, Response } from "express";
import { DeleteCliente } from "./DeletarCliente";

export class DeleteClienteController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deleteCliente = new DeleteCliente();
      const result = await deleteCliente.execute({
        id
      });
      return res.json(result);
    }
  }