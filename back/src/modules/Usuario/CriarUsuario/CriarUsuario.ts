import { hash } from "bcrypt";
import { prisma } from "../../../dataBase/prismaCliente";

interface ICriarUsuario {
    id_client: string;
    nome: string;
    email: string;
    senha: string;
  }

  export class CriarUsuario {
    async execute({id_client,nome,senha ,email}: ICriarUsuario) {
      // validar o usuario existnte
      console.log(nome);
      const NomeExiste = await prisma.usuario.findFirst({
        where: {
            nome: {
            equals: nome,
            mode: "insensitive",
          },
        },
      });
      if (NomeExiste) {
        return new Error("Usuario já existe");
      }
      const UsuarioExiste = await prisma.usuario.findFirst({
        where: {
            email: {
            equals: email,
            mode: "insensitive",
          },
        },
      });
      if (UsuarioExiste) {
        return new Error("Usuario já existe");
      }
    
      // criptografar a senha
      const hashPassword = await hash(senha, 10);
  
      // salvar o client
    const usuario = prisma.usuario.create({
      data: { nome: nome, email:email, senha: hashPassword, id_client: id_client },
 
      });
      return usuario;
    }
  }