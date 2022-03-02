import { Request, Response } from "express";
import { AtualizarMedidas } from "./AtualizarMedidas";
export class AtualizarMedidasController {
    async handle(req: Request, res: Response) {
      const {torax,busto,cintura,quadril,peso,altura,p_gordura} = req.body;
      const {id_usuario} = req;
      const {id} = req.params;
      const atualizarMedidas = new AtualizarMedidas();
      const resultado = await atualizarMedidas.execute({
        id,
        id_usuario,
        torax,
        busto,
        cintura,
        quadril,
        peso,
        altura,
        p_gordura
      });
      if( resultado instanceof Error){
        return res.status(400).json(resultado.message)
      }
      return res.json(resultado);
    }
  }