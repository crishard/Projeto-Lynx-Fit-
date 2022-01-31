import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeleteEquipamento {
    id_equipamento: string;
}

export class DeleteEquipament {
    async execute({ id_equipamento }: IDeleteEquipamento) {

        if (!id_equipamento) {
            return  new Error("Usuario não existe" );
          }
         const result =  await prisma.equipamento.delete({ where: { id_equipamento} });

        return result;
    }
}