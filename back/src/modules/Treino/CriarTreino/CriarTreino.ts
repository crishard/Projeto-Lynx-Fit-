import { prisma } from "../../../dataBase/prismaCliente";
interface ICriarTreino {
    id: string;
    dia: number;
    series: number;
    repeticoes: number;
    nome_equipamento: string;
    treino: string;
    nome_usuario: string;
    id_client: string;
  }
  export class CriarTreino {
    async execute({id, dia, series, nome_equipamento, repeticoes, treino, nome_usuario, id_client}: ICriarTreino) {
      const Treino = await prisma.treino.create({
        data: {
          dia,
          nome_equipamento: nome_equipamento,
          treino,
          repeticoes, 
          series,
          nome_usuario: nome_usuario,
          id_client: id_client
        },
      });
      return Treino;
    }
  }