import { BuscarCliente } from "./BuscarCliente";
import { Request, Response } from "express";

export class BuscarClienteController{
    async handle(req: Request, res: Response){
        const {id_client} = req;

        const buscarCliente = new BuscarCliente();

        const result = await buscarCliente.execute({id_client});

        return res.json(result);
    }
}