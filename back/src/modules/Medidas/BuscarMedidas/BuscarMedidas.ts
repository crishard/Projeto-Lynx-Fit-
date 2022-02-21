import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarMedidas {
  async execute() {
    const buscarMedidas = await prisma.medidas.findMany();

    return buscarMedidas;
  }
}