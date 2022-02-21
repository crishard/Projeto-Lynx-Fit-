import { Request, Response } from "express";
import { BuscarTreino } from "./BuscarTreino";

export class BuscarTreinoController {
  async handle(req: Request, res: Response) {
    const buscarTreino = new BuscarTreino();

    const result = await buscarTreino.execute();

    return res.json(result);
  }
}