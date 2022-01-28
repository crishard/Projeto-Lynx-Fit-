import { prisma } from "../../../dataBase/prismaUsuario";

export class ReadEquipament {
  async execute() {
    const findUser = await prisma.equipamento.findMany();

    return findUser;
  }
}