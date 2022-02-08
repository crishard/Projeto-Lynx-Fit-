import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarMedidas {
    id: string;
}

export class DeletarMedidas {
    async execute({ id }: IDeletarMedidas) {
        const medidasDeletada =  await prisma.treino.delete({ where: { id } });

        return medidasDeletada;
    }
}