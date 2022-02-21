import { Request, Response } from "express";
import { DeletarTreino } from "./DeletarTreino";

export class DeletarTreinoController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deletarTreino = new DeletarTreino();
      const result = await deletarTreino.execute({
        id
      });
      if( result instanceof Error){
        return res.status(400).json(result.message)
      }
      return res.json(result);
    }
  }