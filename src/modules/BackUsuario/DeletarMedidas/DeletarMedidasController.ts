import { Request, Response } from "express";
import { DeletarMedidas } from "./DeletarMedidas";

export class DeletarMedidasController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deletarMedidas = new DeletarMedidas();
      const result = await deletarMedidas.execute({
        id
      });
      return res.json(result);
    }
  }