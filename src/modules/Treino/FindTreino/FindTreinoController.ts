import { Request, Response } from "express";
import { FindTreino } from "./FindTreino";

export class FindTreinoController {
  async handle(req: Request, res: Response) {
    const findTreino = new FindTreino();

    const result = await findTreino.execute();

    return res.json(result);
  }
}