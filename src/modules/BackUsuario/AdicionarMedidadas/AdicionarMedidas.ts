import { Decimal } from "@prisma/client/runtime";
import { prisma } from "../../../dataBase/prismaCliente";

interface IAdicionarMedidas {
    torax: Decimal;
    busto: Decimal;
    cintura: Decimal;
    quadril: Decimal;
    peso: Decimal;
    altura: Decimal
    p_gordura: string;
    nome_usuario: string;
  }
  export class AdicionarMedidas {
    async execute({torax, busto, cintura, quadril, peso, nome_usuario, altura, p_gordura}: IAdicionarMedidas) {
      const Medidas = await prisma.medidas.create({
        data: {
          torax,
          busto,
          cintura,
          quadril, 
          peso,
          nome_usuario: nome_usuario,
          altura,
          p_gordura
        },
      });
      return Medidas;
    }
  }