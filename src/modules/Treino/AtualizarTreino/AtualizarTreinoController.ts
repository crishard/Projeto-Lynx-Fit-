import { Request, Response } from "express";
import { AtualizarTreino } from "./AtualizarTreino";

export class AtualizarTreinoController {
  async handle(req: Request, res: Response) {
    const {dia, nome_equipamento, series, repeticoes, treino} = req.body;
    const atualizarTreino = new AtualizarTreino();
    const result = await atualizarTreino.execute({
      dia,
      nome_equipamento,
      series,
      repeticoes,
      treino
    });
    if( result instanceof Error){
      return res.status(400).json(result.message)
    }
    return res.json(result);
  }
}