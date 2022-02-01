import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarCliente {
    id: string;
}

export class DeletarCliente {
    async execute({ id }: IDeletarCliente) {

        if (!id) {
            return response
            .status(500)
            .json({ status: "erro", message: "O Cliente não existe" });
          }
         const resultado =  await prisma.cliente.delete({ where: { id } });

        return resultado;
    }
}