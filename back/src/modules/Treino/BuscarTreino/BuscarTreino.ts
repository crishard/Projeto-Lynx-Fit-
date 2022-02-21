import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarTreino {
  async execute() {
    const buscarTreino = await prisma.treino.findMany();

    return buscarTreino;
  }
}