import { Request, Response } from "express";
import { BuscarTreino } from "./BuscarTreino";

export class BuscarTreinoController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;
    const buscarTreino = new BuscarTreino();

    const result = await buscarTreino.execute(id_client);

    return res.json(result);
  }
}