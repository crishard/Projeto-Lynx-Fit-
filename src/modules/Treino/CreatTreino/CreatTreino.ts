import { prisma } from "../../../dataBase/prismaTreino";

interface ICreateTreino {
    dia: number;
    series: number;
    repeticoes: number;
    equipamento: string;
    treino: string;
  }
  export class CreateTreino {
    async execute({dia, series, equipamento, repeticoes, treino}: ICreateTreino) {
      const treinoExist = await prisma.treino.findFirst({
        where: {
            dia: {
            equals: dia
          },
        },
      });
      if (treinoExist) {
        throw new Error("Usuario já existe");
      }
      const Treino = await prisma.treino.create({
        data: {
          dia,
          equipamento,
          treino,
          repeticoes, 
          series,
        },
      });
      return Treino;
    }
  }