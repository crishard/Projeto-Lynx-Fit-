import { hash } from "bcrypt";
import { prisma } from "../../../dataBase/prismaUsuario";

interface ICreateUsuario {
    id_client: string;
    username: string;
    email: string;
    password: string;
  }

  export class CreateUserCase {
    async execute({id_client,username,password ,email}: ICreateUsuario) {
      // validar o usuario existnte
      console.log(username);
      const UserExists = await prisma.usuario.findFirst({
        where: {
            email: {
            equals: email,
            mode: "insensitive",
          },
        },
      });
      if (UserExists) {
        throw new Error("Usuario já existe");
      }
      // criptografar a senha
      const hashPassword = await hash(password, 10);
  
      // salvar o client
    const user = prisma.usuario.create({
      data: { username: username, email:email, password: hashPassword, id_client: id_client },
 
      });
      return user;
    }
  }