import {prisma} from "../../../dataBase/prismaTreino";

interface IUpdateTreino {
  dia: number;
  equipamento: string;
  series: number;
  repeticoes: number;
  treino: string;
}

export class UpdateTreino {
  async execute({ dia, equipamento, series, repeticoes, treino }: IUpdateTreino) {
    if (!dia) {
        throw new Error("Id não encontrado");
    }
    
      const todoAlreadyExist = await prisma.treino.findUnique({ where: { dia } });
    
      if (!todoAlreadyExist) {
        throw new Error("Não tem treino neste dia");
    }
    
    const result = await prisma.treino.update({
        where: {
            dia,
        },
          data: {
            equipamento,
            series,
            repeticoes,
            treino
          },
    });

        return result;
  }
}
    