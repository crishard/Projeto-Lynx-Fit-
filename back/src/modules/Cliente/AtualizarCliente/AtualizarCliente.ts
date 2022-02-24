import {prisma} from "../../../dataBase/prismaCliente";
import { hash } from "bcrypt";

interface IAtualizarCliente {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cnpj: string;
}

export class AtualizarCliente {
  async execute({ id,nome,email,senha, cnpj }: IAtualizarCliente) {
    if (!id) {
      return new Error("Id não encontrado");
    }
    
    const clienteExiste = await prisma.cliente.findUnique({ where: { id } });
  
    if (!clienteExiste) {
      return new Error("Cliente não existe");
    }
    const hashPassword = await hash(senha, 10);
    
    const resultado = await prisma.cliente.update({
      where: {
        id,
      },
      data: {
        nome,
        email,
        senha: hashPassword,
        cnpj
          
      },
    });

    return resultado;
  }

}