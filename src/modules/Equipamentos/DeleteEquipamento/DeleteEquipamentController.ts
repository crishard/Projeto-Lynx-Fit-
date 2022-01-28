import { Request, Response } from "express";
import { DeleteEquipament } from "./DeleteEquipament";

export class DeleteEquipamentController {
    async handle(req: Request, res: Response) {
      const { id_equipamento} = req.params;
      const deleteEquipament = new DeleteEquipament();
      const result = await deleteEquipament.execute({id_equipamento});
      return res.json(result);
    }
  }