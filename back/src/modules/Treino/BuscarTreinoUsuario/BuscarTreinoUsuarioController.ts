import { BuscarTreinoUsuario } from "./BuscarTreinoUsuario";
import { Request, Response } from "express";

export class BuscarTreinoUsuarioController{
    async handle(req: Request, res: Response){
        const {nome_usuario} = req.params;

        const buscarTreinoUsuario = new BuscarTreinoUsuario();

        const result = await buscarTreinoUsuario.execute({nome_usuario});

        return res.json(result);
    }
}