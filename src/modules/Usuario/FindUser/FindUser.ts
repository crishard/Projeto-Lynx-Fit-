import { prisma } from "../../../dataBase/prismaUsuario";

export class FindUser {
  async execute() {
    const findUser = await prisma.usuario.findMany();

    return findUser;
  }
}