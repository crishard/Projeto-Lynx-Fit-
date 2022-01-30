import { Request, Response } from "express";
import { ReadEquipament } from "./BuscarEquipamento";

export class ReadEquipamentController {
  async handle(req: Request, res: Response) {
    const readEquipament = new ReadEquipament();

    const result = await readEquipament.execute();

    return res.json(result);
  }
}