import { Request, Response } from "express";
import { DeletarUsuario } from "./DeletarUsuario";

export class DeletarUsuarioController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deletarUsuario = new DeletarUsuario();
      const resultado = await deletarUsuario.execute({
        id
      });
      if( resultado instanceof Error){
        return res.status(400).json(resultado.message)
      }
      return res.json(resultado);
    }
  }