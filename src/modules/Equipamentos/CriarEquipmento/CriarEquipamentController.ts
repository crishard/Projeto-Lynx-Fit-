import { Request, Response } from "express";
import { CreateEquipamento } from "./CriarEquipamento";

export class CreateEquipamentController {
  async handle(req: Request, res: Response) {
    const {nome_equipamento} = req.body;
    const createEquipamentos = new CreateEquipamento();
    const result = await createEquipamentos.execute({
      id_client: req.id_client,
      nome_equipamento,
    });
    return res.json(result);
  }
}