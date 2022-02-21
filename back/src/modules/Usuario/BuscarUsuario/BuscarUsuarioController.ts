import { Request, Response } from "express";
import { BuscarUsuario } from "./BuscarUsuario";

export class BuscarUsuarioController {
  async handle(req: Request, res: Response) {
    const buscarUsuario = new BuscarUsuario();

    const resultado = await buscarUsuario.execute();

    return res.json(resultado);
  }
}