import { Request, Response } from "express";
import { UpdateEquipament } from "./UpdateEquipament";

export class UpdateEquipamentController {
  async handle(req: Request, res: Response) {
    const {id_equipamento,nome_equipamento} = req.body;
    const updateEquipament = new UpdateEquipament();
    const result = await updateEquipament.execute({
        id_equipamento,
        nome_equipamento
    });
    return res.json(result);
  }
}