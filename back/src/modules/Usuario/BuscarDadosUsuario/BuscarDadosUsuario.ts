import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarDadosUsuario{
    id_usuario: string;
}
export class BuscarDadosUsuario{
    async execute({id_usuario}: IBuscarDadosUsuario){
        const buscarUsuario = await prisma.usuario.findUnique({
            where: {
              id: id_usuario,
            },
          })
        return buscarUsuario;
    }
}