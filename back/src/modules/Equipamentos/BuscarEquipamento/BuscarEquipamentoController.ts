import { Request, Response } from "express";
import { BuscarEquipamento } from "./BuscarEquipamento";

export class BuscarEquipamentoController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;
    const buscarEquipamento = new BuscarEquipamento();

    const resultado = await buscarEquipamento.execute(id_client);

    return res.json(resultado);
  }
 }
