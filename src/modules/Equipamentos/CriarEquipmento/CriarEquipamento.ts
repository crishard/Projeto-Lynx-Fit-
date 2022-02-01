import { prisma } from "../../../dataBase/prismaCliente";

interface ICriarEquipamento {
  nome_equipamento: string;
   id_client: string;
}
export class CriarEquipamento {
  async execute({ nome_equipamento,id_client }: ICriarEquipamento) {
    const equipamento = prisma.equipamento.create({
      data: { nome_equipamento: nome_equipamento, id_client:id_client },
    });

    return equipamento;
  }
}