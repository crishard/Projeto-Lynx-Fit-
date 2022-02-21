import {prisma} from "../../../dataBase/prismaCliente";

interface IAtualizarEquipamentos {
    id_equipamento: string;
    nome_equipamento: string;
  }
  
  export class AtualizarEquipamento {
    async execute({ id_equipamento,nome_equipamento}: IAtualizarEquipamentos) {

        const VerificarIdExiste = await prisma.equipamento.findUnique({ where: { id_equipamento } });
        if (!VerificarIdExiste) {
          return new Error("Equipamento não existe");
        }
      
      const resultado = await prisma.equipamento.update({
          where: {
              id_equipamento,
            },
            data: {
              nome_equipamento  
            },
          });
  
          return resultado;
      }
  
  }