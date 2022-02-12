import {prisma} from "../../../dataBase/prismaCliente";

interface IAtualizarTreino {
  id: string;
  dia: number;
  nome_usuario: string;
  nome_equipamento: string;
  series: number;
  repeticoes: number;
  treino: string;
}

export class AtualizarTreino {
  async execute({id, dia, nome_equipamento, series, repeticoes, treino, nome_usuario }: IAtualizarTreino) {
    if (!id) {
        return new Error("Id não encontrado");
    }
    const result = await prisma.treino.update({
        where: {
            id,
        },
          data: {
            dia,
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
    