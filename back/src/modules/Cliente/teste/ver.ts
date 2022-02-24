import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarClientee {
  async execute() {
    const buscarCliente = await prisma.cliente.findMany();

    return buscarCliente;
  }
}
