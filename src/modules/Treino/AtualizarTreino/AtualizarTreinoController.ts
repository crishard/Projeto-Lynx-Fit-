import { Request, Response } from "express";
import { AtualizarTreino } from "./AtualizarTreino";

export class AtualizarTreinoController {
  async handle(req: Request, res: Response) {
    const {id, dia, nome_equipamento, series, repeticoes, treino, nome_usuario} = req.body;
    const atualizarTreino = new AtualizarTreino();
    const result = await atualizarTreino.execute({
      id,
      dia,
      nome_usuario,
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