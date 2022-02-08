import {prisma} from "../../../dataBase/prismaCliente";

interface IAtualizarTreino {
  dia: number;
  nome_usuario: string;
  nome_equipamento: string;
  series: number;
  repeticoes: number;
  treino: string;
}

export class AtualizarTreino {
  async execute({ dia, nome_equipamento, series, repeticoes, treino, nome_usuario }: IAtualizarTreino) {
    if (!dia) {
        return new Error("Id não encontrado");
    }
    const result = await prisma.treino.update({
        where: {
            dia,
        },
          data: {
            nome_usuario: nome_usuario,
            nome_equipamento: nome_equipamento,
            series,
            repeticoes,
            treino
          },
    });
        return result;
  }
}
    