import { hash } from "bcrypt";
import { prisma } from "../../../dataBase/prismaCliente";

interface ICriarCliente {
    nome: string;
    email: string;
    senha: string;
    cnpj: string;
}

  export class CriarCliente {
    async execute({ nome,email ,senha, cnpj}: ICriarCliente) {
      // validar o cliente existnte
      
      const clienteExiste = await prisma.cliente.findFirst({
        where: {
            cnpj: {
            equals: cnpj,
            
          },
        },
      });
      if (clienteExiste) {
        throw new Error("Cliente já existe");
      }
      // criptografar a senha
      const hashPassword = await hash(senha, 10);
  
      // salvar o client
      const cliente = await prisma.cliente.create({
        data: {
          nome,
          email,
          cnpj,
          senha: hashPassword
        },
      });
      return cliente;
    }
  }