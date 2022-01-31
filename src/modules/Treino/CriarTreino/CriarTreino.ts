import { prisma } from "../../../dataBase/prismaCliente";
interface ICreateTreino {
    dia: number;
    series: number;
    repeticoes: number;
    nome_equipamento: string;
    treino: string;
    nome_usuario: string;
    id_client: string;
  }
  export class CreateTreino {
    async execute({dia, series, nome_equipamento, repeticoes, treino, nome_usuario, id_client}: ICreateTreino) {
      const treinoExist = await prisma.treino.findFirst({
        where: {
            dia: {
            equals: dia
          },
        },
      });
      if (treinoExist) {
        throw new Error("Treino para esee dia já foi criado");
      }
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