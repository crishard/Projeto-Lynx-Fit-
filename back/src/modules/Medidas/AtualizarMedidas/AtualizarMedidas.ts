import {prisma} from "../../../dataBase/prismaCliente";
import { Decimal } from "@prisma/client/runtime";

interface IAtualizarMedidas {
    id: string;
    id_usuario:string;
    torax: Decimal;
    busto: Decimal;
    cintura: Decimal;
    quadril: Decimal;
    peso: Decimal;
    altura: Decimal
    p_gordura: string;
    
  }

export class AtualizarMedidas {
  async execute({ id,id_usuario,torax,busto,cintura,quadril,peso,altura,p_gordura}: IAtualizarMedidas) {
   
    
    const resultado = await prisma.medidas.update({
        where: {
          id,
          },
          data: {
            torax,
            id_usuario:id_usuario,
            busto,
            cintura,
            quadril, 
            peso,
            altura,
            p_gordura
          },
        });

        return resultado;
    }

}