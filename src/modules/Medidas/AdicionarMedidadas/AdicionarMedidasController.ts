import { Request, Response } from "express";
import { AdicionarMedidas } from "./AdicionarMedidas";

export class AdicionarMedidasController {
  async handle(req: Request, res: Response) {
    const {id, torax, busto, cintura, quadril, peso, altura, p_gordura} = req.body;
    const adicionarMedidas = new AdicionarMedidas();
    const result = await adicionarMedidas.execute({
      id,
      torax,
      busto,
      cintura,
      id_usuario: req.id_usuario,
      quadril,
      peso,
      altura,
      p_gordura,
    });
    return res.json(result);
  }
}