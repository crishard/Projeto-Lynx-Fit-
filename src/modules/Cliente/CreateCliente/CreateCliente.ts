import { hash } from "bcrypt";
import { prisma } from "../../../dataBase/PrismaCliente";

interface ICreateCliente {
    nome: string;
    email: string;
    senha: string;
    cnpj: string;
}

  export class CreateCliente {
    async execute({ nome,email ,senha, cnpj}: ICreateCliente) {
      // validar o cliente existnte
      
      const clientExists = await prisma.cliente.findFirst({
        where: {
            cnpj: {
            equals: cnpj,
            
          },
        },
      });
      if (clientExists) {
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