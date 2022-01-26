import {prisma} from "../../../dataBase/PrismaCliente";

interface IUpdateCliente {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cnpj: string;
}

export class UpdateCliente {
  async execute({ id,nome,email,senha, cnpj }: IUpdateCliente) {
    if (!id) {
        throw new Error("Id não encontrado");
      }
    
      const todoAlreadyExist = await prisma.cliente.findUnique({ where: { id } });
    
      if (!todoAlreadyExist) {
        throw new Error("Cliente não existe");
      }
    
    const result = await prisma.cliente.update({
        where: {
            id,
          },
          data: {
            nome,
            email,
            senha,
            cnpj
            
          },
        });

        return result;
    }

}
    