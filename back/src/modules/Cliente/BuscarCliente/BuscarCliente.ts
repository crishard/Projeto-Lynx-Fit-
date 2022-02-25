import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarCliente{
  id_client: string;
}
export class BuscarCliente{
  async execute({id_client}: IBuscarCliente){
      const buscarCliente = await prisma.cliente.findUnique({
          where: {
            id: id_client
          },
        })
      return buscarCliente;
  }
}