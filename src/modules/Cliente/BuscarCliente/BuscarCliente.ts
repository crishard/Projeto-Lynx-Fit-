import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarCliente{
    id: string;
}
export class BuscarCliente{
    async execute({id}: IBuscarCliente){
        const buscarCliente = await prisma.cliente.findUnique({
            where: {
              id: id
            },
          })
        return buscarCliente;
    }
}