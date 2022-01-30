import { prisma } from "../../../dataBase/prismaCliente";

export class FindTreino {
  async execute() {
    const findTreino = await prisma.treino.findMany();

    return findTreino;
  }
}