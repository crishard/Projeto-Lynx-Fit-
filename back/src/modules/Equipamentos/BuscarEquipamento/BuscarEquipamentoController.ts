import { Request, Response } from "express";
import { BuscarEquipamento } from "./BuscarEquipamento";

export class BuscarEquipamentoController {
  async handle(req: Request, res: Response) {
    const buscarEquipamento = new BuscarEquipamento();

    const resultado = await buscarEquipamento.execute();

    return res.json(resultado);
  }
}