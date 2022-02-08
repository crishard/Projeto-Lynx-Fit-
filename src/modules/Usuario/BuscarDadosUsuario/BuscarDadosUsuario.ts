import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarDadosUsuario{
    id: string;
}
export class BuscarDadosUsuario{
    async execute({id}: IBuscarDadosUsuario){
        const buscarDadosUsuario = await prisma.usuario.findUnique({
            where: {
              id: id
            },
          })
        return buscarDadosUsuario;
    }
}