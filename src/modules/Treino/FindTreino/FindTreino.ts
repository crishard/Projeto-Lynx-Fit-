import { prisma } from "../../../dataBase/prismaTreino";

export class FindTreino {
  async execute() {
    const findTreino = await prisma.treino.findMany();

    return findTreino;
  }
}