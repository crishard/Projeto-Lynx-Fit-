import { Request, Response } from "express";
import { BuscarMedidas } from "./BuscarMedidas";

export class BuscarMedidasController {
  async handle(req: Request, res: Response) {
    const {id_usuario} = req;
    const buscarMedidas = new BuscarMedidas();

    const result = await buscarMedidas.execute({id_usuario});

    return res.json(result);
  }
}