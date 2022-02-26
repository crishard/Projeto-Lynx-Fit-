import { prisma } from "../../../dataBase/prismaCliente";

export class BuscarTreino {
  async execute(id_client:string) {
    const buscarTreino= await prisma.treino.findMany({
        where:{id_client: id_client},
        });
        return buscarTreino;
      }
    }