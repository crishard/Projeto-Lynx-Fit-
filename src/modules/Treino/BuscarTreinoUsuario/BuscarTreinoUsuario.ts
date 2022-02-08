import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarDadosUsuario{
    nome_usuario: string;
}
export class BuscarDadosUsuario{
    async execute({nome_usuario}: IBuscarDadosUsuario){
        const buscarDadosUsuario = await prisma.usuario.findUnique({
            where: {
                nome_usuario: nome_usuario
            },
          })
        return buscarDadosUsuario;
    }
}