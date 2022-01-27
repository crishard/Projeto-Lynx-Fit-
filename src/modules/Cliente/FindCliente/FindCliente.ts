import { prisma } from "../../../dataBase/prismaCliente";

export class FindCliente {
  async execute() {
    const findCliente = await prisma.cliente.findMany();

    return findCliente;
  }
}