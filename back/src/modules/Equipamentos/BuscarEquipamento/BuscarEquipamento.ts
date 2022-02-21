import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarEquipamento {
  async execute() {
    const buscarEquipamento = await prisma.equipamento.findMany();

    return buscarEquipamento;
  }
}