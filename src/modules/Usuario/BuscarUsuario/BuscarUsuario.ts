import { prisma } from "../../../dataBase/prismaCliente";

export class FindUser {
  async execute() {
    const findUser = await prisma.usuario.findMany();

    return findUser;
  }
}