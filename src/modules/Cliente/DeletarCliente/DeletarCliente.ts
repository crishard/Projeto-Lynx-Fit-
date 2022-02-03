import { response } from "express";
import { prisma } from "../../../dataBase/prismaCliente";

interface IDeletarCliente {
    id: string;
}

export class DeletarCliente {
    async execute({ id }: IDeletarCliente) {

  const clienteExiste = await prisma.cliente.findUnique({ where: { id } });
  
    if (!clienteExiste) {
      return new Error("Cliente não existe");
    }
    
         const resultado =  await prisma.cliente.delete({ where: { id } });

        return resultado;
    }
}