import { BuscarCliente } from "./BuscarCliente";
import { Request, Response } from "express";

export class BuscarClienteController{
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const buscarCliente = new BuscarCliente();

        const result = await buscarCliente.execute({id});

        return res.json(result);
    }
}