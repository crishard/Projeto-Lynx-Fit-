import { response } from "express";
import { prisma } from "../../../dataBase/prismaUsuario";

interface IDeleteUser {
    id: string;
}

export class DeleteUser {
    async execute({ id }: IDeleteUser) {

        if (!id) {
            throw new Error("id não encotrado");
        }
         const result =  await prisma.usuario.delete({ where: { id } });

        return result;
    }
}