import { Request, Response } from "express";
import { DeletarEquipamento } from "./DeletarEquipamento";

export class DeletarEquipamentoController {
    async handle(req: Request, res: Response) {
      const { id_equipamento} = req.params;
      const deletarEquipamento = new DeletarEquipamento();
      const resultado = await deletarEquipamento.execute({
        id_equipamento
      });
      if( resultado instanceof Error){
        return res.status(400).json(resultado.message)
      }
      return res.json(resultado);
    }
  }