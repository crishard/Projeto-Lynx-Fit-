import { BuscarDadosUsuario } from "./BuscarDadosUsuario";
import { Request, Response } from "express";

export class BuscarDadosUsuarioController{
    async handle(req: Request, res: Response){
        const {id} = req.body;

        const buscarDadosUsuario = new BuscarDadosUsuario();

        const result = await buscarDadosUsuario.execute({id});

        return res.json(result);
    }
}