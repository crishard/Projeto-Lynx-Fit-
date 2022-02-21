import { Request, Response } from "express";
import { AtualizarEquipamento } from "./AtualizarEquipamento";

export class AtualizarEquipamentoController {
  async handle(req: Request, res: Response) {
    const {id_equipamento,nome_equipamento} = req.body;
    const atualizarEquipamento = new AtualizarEquipamento();
    const resultado = await atualizarEquipamento.execute({
        id_equipamento,
        nome_equipamento
    });
    if( resultado instanceof Error){
      return res.status(400).json(resultado.message)
    }
    return res.json(resultado);
  }
}