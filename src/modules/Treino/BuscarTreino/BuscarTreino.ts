import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarTreino {
  async execute() {
    const findTreino = await prisma.treino.findMany();

    return findTreino;
  }
}