import { Request, Response } from "express";
import { BuscarClientee } from "./ver";

export class BuscarClienteeController {
  async handle(req: Request, res: Response) {
    const buscarClientee = new BuscarClientee();

    const result = await buscarClientee.execute();

    return res.json(result);
  }
}