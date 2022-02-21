import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarUsuario {
    id: string;
}

export class DeletarUsuario {
    async execute({ id }: IDeletarUsuario) {

        const VerficarUsuario = await prisma.usuario.findUnique({ where: { id } });
    
        if (!VerficarUsuario) {
          return new Error("Usuario não existe");
        }
         const resultado =  await prisma.usuario.delete({ where: { id } });

        return resultado;
    }
}