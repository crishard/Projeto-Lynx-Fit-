import { prisma } from "../../../dataBase/PrismaCliente";

export class FindCliente {
  async execute() {
    const findCliente = await prisma.cliente.findMany();

    return findCliente;
  }
}