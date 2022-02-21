import { Request, Response } from "express";
import { CriarEquipamento } from "./CriarEquipamento";
export class CriarEquipamentoController {
  async handle(req: Request, res: Response) {
    const { nome_equipamento } = req.body;
    const criarEquipamento = new CriarEquipamento();
    const resultado = await criarEquipamento.execute({
      nome_equipamento,
      id_client: req.id_client,
    });
    return res.json(resultado);
  }
}