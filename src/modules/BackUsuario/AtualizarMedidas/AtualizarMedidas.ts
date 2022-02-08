import { Decimal } from "@prisma/client/runtime";
import {prisma} from "../../../dataBase/prismaCliente";

interface IAtualizarMedidas {
    id: string;
    torax: Decimal;
    busto: Decimal;
    cintura: Decimal;
    quadril: Decimal;
    peso: Decimal;
    altura: Decimal
    p_gordura: string;
}

export class AtualizarTreino {
  async execute({id, torax, busto, cintura, quadril, peso, altura, p_gordura }: IAtualizarMedidas) {
    if (!id) {
        return new Error("Id não encontrado");
    }
    const result = await prisma.medidas.update({
        where: {
            id,
        },
          data: {
            torax,
            busto,
            cintura,
            quadril,
            peso,
            altura,
            p_gordura
          },
    });
        return result;
  }
}
    