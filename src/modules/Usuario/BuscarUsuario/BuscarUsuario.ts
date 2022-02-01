import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarUsuario {
  async execute() {
    const buscarUsuario = await prisma.usuario.findMany();

    return buscarUsuario;
  }
}