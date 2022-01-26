import { Request, Response } from "express";
import { CreateTreino } from "./CreateTreino";

export class CreateTreinoController {
  
  async handle(req: Request, res: Response) {
    const {dia, equipamento, treino, series, repeticoes} = req.body;
    const createTreino = new CreateTreino();
    const result = await createTreino.execute({
      dia,
      equipamento,
      series,
      repeticoes,
      treino
    });
    return res.json(result);
  }
}