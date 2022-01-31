import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarTreino {
    id: string;
}

export class DeletarTreino {
    async execute({ id }: IDeletarTreino) {

        if (!id) {
            return response
            .status(500)
            .json({ status: "erro", message: "Usuario não existe" });
        }
        const treinoDeletado =  await prisma.treino.delete({ where: { id } });

        return treinoDeletado;
    }
}