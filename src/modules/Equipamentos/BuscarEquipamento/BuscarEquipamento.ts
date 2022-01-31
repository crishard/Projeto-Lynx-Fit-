import { prisma } from "../../../dataBase/prismaCliente";

export class ReadEquipament {
  async execute() {
    const findUser = await prisma.equipamento.findMany();

    return findUser;
  }
}