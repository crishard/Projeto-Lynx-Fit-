import { Request, Response } from "express";
import { CriarTreino } from "./CriarTreino";

export class CriarTreinoController {
  async handle(req: Request, res: Response) {
    const {id, dia, treino, series, repeticoes, nome_equipamento, nome_usuario} = req.body;
    const criarTreino = new CriarTreino();
    const result = await criarTreino.execute({
      id,
      nome_equipamento: nome_equipamento,
      dia,
      series,
      nome_usuario: nome_usuario,
      repeticoes,
      treino,
      id_client: req.id_client,
    });
    // if(result instanceof Error){
    //   return res.status(400).json(result.message)
    // }
    return res.json(result);
  }
}