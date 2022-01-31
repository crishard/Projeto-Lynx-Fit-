import { Request, Response } from "express";
import { UpdateTreino } from "./AtualizarTreino";

export class UpdateTreinoController {
  async handle(req: Request, res: Response) {
    const {dia, nome_equipamento, series, repeticoes, treino} = req.body;
    const updateTreino = new UpdateTreino();
    const result = await updateTreino.execute({
      dia,
      nome_equipamento,
      series,
      repeticoes,
      treino
    });
    return res.json(result);
  }
}