import { Request, Response } from "express";
import { BuscarCliente } from "./BuscarCliente";

export class BuscarClienteController {
  async handle(req: Request, res: Response) {
    const buscarCliente = new BuscarCliente();

    const result = await buscarCliente.execute();

    return res.json(result);
  }
}