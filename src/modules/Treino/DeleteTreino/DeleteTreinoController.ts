import { Request, Response } from "express";
import { DeleteTreino } from "./DeleteTreino";

export class DeleteTreinoController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deleteTreino = new DeleteTreino();
      const result = await deleteTreino.execute({
        id
      });
      return res.json(result);
    }
  }