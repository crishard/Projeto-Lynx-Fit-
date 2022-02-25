import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarEquipamento {
  async execute(id_cliente: string) {
    const buscarEquipamento = await prisma.equipamento.findMany({
      where: { id_client: id_cliente },
      });
      return buscarEquipamento;
    }
  }