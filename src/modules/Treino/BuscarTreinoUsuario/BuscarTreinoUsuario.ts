import { prisma} from "../../../dataBase/prismaCliente";

interface IBuscarTreinoUsuario{
    nome_usuario: string;
}
export class BuscarTreinoUsuario{
    async execute({nome_usuario}: IBuscarTreinoUsuario){
        const buscarTreinoUsuario = await prisma.treino.findMany({
            where:{
                nome_usuario: nome_usuario
            }
        })
        return buscarTreinoUsuario;
    }
}