import { Request, Response } from "express";
import { BuscarMedidas } from "./BuscarMedidas";

export class BuscarMedidasController {
  async handle(req: Request, res: Response) {
    const buscarMedidas = new BuscarMedidas();

    const result = await buscarMedidas.execute();

    return res.json(result);
  }
}