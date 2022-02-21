import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarTreino {
    id: string;
}

export class DeletarTreino {
    async execute({ id }: IDeletarTreino) {

        const VerficarEquipamento = await prisma.treino.findUnique({ where: { id} });
    
        if (!VerficarEquipamento) {
          return new Error("Equipamento não existe");
        }
      
        const treinoDeletado =  await prisma.treino.delete({ where: { id } });

        return treinoDeletado;
    }
}