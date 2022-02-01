import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarCliente {
  async execute() {
    const buscarCliente = await prisma.cliente.findMany();

    return buscarCliente;
  }
}