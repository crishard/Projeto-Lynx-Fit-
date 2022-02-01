import {prisma} from "../../../dataBase/prismaCliente";

interface IAtualizarUsuario {
 
  id: string;
  nome: string;
  email: string;
  senha: string;
}

export class AtualizarUsuario {
  async execute({ id,nome,email,senha }: IAtualizarUsuario) {
    if (!id) {
        return new Error("Id não encontrado");
      }
    
      const VerficarUsuario = await prisma.usuario.findUnique({ where: { id } });
    
      if (!VerficarUsuario) {
        return new Error("Usuario não existe");
      }
    
    const resultado = await prisma.usuario.update({
        where: {
            id,
          },
          data: {
            nome,
            email,
            senha
            
          },
        });

        return resultado;
    }

}