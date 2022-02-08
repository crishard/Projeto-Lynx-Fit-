import { Request, Response } from "express";
import { AtualizarTreino } from "./AtualizarMedidas";

export class AtualizarTreinoController {
  async handle(req: Request, res: Response) {
    const {id, torax, busto, cintura, quadril, peso, altura, p_gordura } = req.body;
    const atualizarTreino = new AtualizarTreino();
    const result = await atualizarTreino.execute({
        id,
        torax,
        busto,
        cintura,
        quadril,
        peso,
        altura,
        p_gordura
    });
    if( result instanceof Error){
      return res.status(400).json(result.message)
    }
    return res.json(result);
  }
}