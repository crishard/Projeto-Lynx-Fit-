import { prisma } from "../../../dataBase/prismaCliente";

interface ICreateEquipamento {
  nome_equipamento: string;
   id_client: string;
}
export class CreateEquipamento {
  async execute({ nome_equipamento,id_client }: ICreateEquipamento) {
    const equipamento = prisma.equipamento.create({
      data: { nome_equipamento: nome_equipamento, id_client:id_client },
    });

    return equipamento;
  }
}