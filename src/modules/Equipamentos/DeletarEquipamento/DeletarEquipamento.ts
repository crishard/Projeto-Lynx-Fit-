import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarEquipamento {
    id_equipamento: string;
}

export class DeletarEquipamento{
    async execute({ id_equipamento }: IDeletarEquipamento) {
         console.log(id_equipamento)
         const VerficarEquipamento = await prisma.equipamento.findUnique({ where: { id_equipamento } });
    
         if (!VerficarEquipamento) {
           return new Error("Equipamento não existe");
         }
         const resultado =  await prisma.equipamento.delete({ where: { id_equipamento } 
        });
        
        return resultado;
    }
}