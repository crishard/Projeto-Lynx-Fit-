import { Request, Response } from "express";
import { CreateTreino } from "./CriarTreino";

export class CreateTreinoController {
  async handle(req: Request, res: Response) {
    const {dia, treino, series, repeticoes, nome_equipamento, nome_usuario} = req.body;
    const createTreino = new CreateTreino();
    const result = await createTreino.execute({
      nome_equipamento: nome_equipamento,
      dia,
      series,
      nome_usuario: nome_usuario,
      repeticoes,
      treino,
      id_client: req.id_client,
    });
    if(result instanceof Error){
      return res.status(400).json(result.message)
    }
    return res.json(result);
  }
}