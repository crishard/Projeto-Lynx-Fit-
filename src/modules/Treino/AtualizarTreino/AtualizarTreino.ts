import {prisma} from "../../../dataBase/prismaCliente";

interface IUpdateTreino {
  dia: number;
  nome_equipamento: string;
  series: number;
  repeticoes: number;
  treino: string;
}

export class UpdateTreino {
  async execute({ dia, nome_equipamento, series, repeticoes, treino }: IUpdateTreino) {
    if (!dia) {
        throw new Error("Id não encontrado");
    }
    const result = await prisma.treino.update({
        where: {
            dia,
        },
          data: {
            nome_equipamento: nome_equipamento,
            series,
            repeticoes,
            treino
          },
    });
        return result;
  }
}
    