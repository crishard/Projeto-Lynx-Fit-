import { response } from "express";
import { prisma } from "../../../dataBase/prismaUsuario";

interface IDeleteUser {
    id: string;
}

export class DeleteUser {
    async execute({ id }: IDeleteUser) {

        if (!id) {
            return response
            .status(500)
            .json({ status: "erro", message: "Usuario não existe" });
        }
        const result =  await prisma.usuario.delete({ where: { id } });

        return result;
    }
}