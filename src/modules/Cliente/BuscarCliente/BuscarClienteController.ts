import { Request, Response } from "express";
import { FindCliente } from "./BuscarCliente";

export class FindClienteController {
  async handle(req: Request, res: Response) {
    const findCliente = new FindCliente();

    const result = await findCliente.execute();

    return res.json(result);
  }
}