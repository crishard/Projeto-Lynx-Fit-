import { response } from "express";
import { prisma } from "../../../dataBase/PrismaCliente";

interface IDeleteCliente {
    id: string;
}

export class DeleteCliente {
    async execute({ id }: IDeleteCliente) {

        if (!id) {
            return response
            .status(500)
            .json({ status: "erro", message: "O Cliente não existe" });
          }
         const result =  await prisma.cliente.delete({ where: { id } });

        return result;
    }
}