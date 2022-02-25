import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarUsuario {
  async execute(id_client:string) {
    const buscarUsuario = await prisma.usuario.findMany({
      where:{id_client: id_client},
      });
      return buscarUsuario;
    }
  }