import { BuscarDadosUsuario } from "./BuscarDadosUsuario";
import { Request, Response } from "express";

export class BuscarDadosUsuarioController{
    async handle(req: Request, res: Response){
        const {id_usuario} = req;

        const buscarDadosUsuario = new BuscarDadosUsuario();

        const result = await buscarDadosUsuario.execute({id_usuario});

        return res.json(result);
    }
}