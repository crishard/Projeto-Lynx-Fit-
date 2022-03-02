import { prisma } from "../../../dataBase/prismaCliente";

interface IBuscarMedidasUsuario{
  id_usuario: string;
}

export class BuscarMedidas {
  async execute({id_usuario} : IBuscarMedidasUsuario) {
    const buscarMedidas = await prisma.medidas.findMany({
      where:{
        id_usuario: id_usuario
      }});

    return buscarMedidas;
  }
}