import { Request, Response } from "express";
import { UpdateTreino } from "./UpdateTreino";

export class UpdateTreinoController {
  async handle(req: Request, res: Response) {
    const {dia, equipamento, series, repeticoes, treino} = req.body;
    const updateTreino = new UpdateTreino();
    const result = await updateTreino.execute({
      dia,
      equipamento,
      series,
      repeticoes,
      treino
    });
    return res.json(result);
  }
}