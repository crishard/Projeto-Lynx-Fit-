import {prisma} from "../../../dataBase/prismaUsuario";

interface IUpdateEquipamentos {
    id_equipamento: string;
    nome_equipamento: string;
  }
  
  export class UpdateEquipament {
    async execute({ id_equipamento,nome_equipamento}: IUpdateEquipamentos) {

        const todoAlreadyExist = await prisma.equipamento.findUnique({ where: { id_equipamento } });
      
        if (!todoAlreadyExist) {
          throw new Error("Equipamento não existe");
        }
      
      const result = await prisma.equipamento.update({
          where: {
              id_equipamento,
            },
            data: {
              nome_equipamento  
            },
          });
  
          return result;
      }
  
  }