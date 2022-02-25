import { Request, Response } from "express";
import { BuscarUsuario } from "./BuscarUsuario";

export class BuscarUsuarioController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;
    const buscarUsuario = new BuscarUsuario();

    const resultado = await buscarUsuario.execute(id_client);

    return res.json(resultado);
  }
}