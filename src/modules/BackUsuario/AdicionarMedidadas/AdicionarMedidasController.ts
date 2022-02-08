import { Request, Response } from "express";
import { AdicionarMedidas } from "./AdicionarMedidas";

export class AdicionarMedidasController {
  async handle(req: Request, res: Response) {
    const {torax, busto, cintura, quadril, peso, nome_usuario, altura, p_gordura} = req.body;
    const adicionarMedidas = new AdicionarMedidas();
    const result = await adicionarMedidas.execute({
      torax,
      busto,
      cintura,
      nome_usuario: nome_usuario,
      quadril,
      peso,
      altura,
      p_gordura,
    });
    return res.json(result);
  }
}