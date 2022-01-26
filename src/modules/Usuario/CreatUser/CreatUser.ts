import { hash } from "bcrypt";
import { prisma } from "../../../dataBase/prismaUsuario";

interface ICreateUsuario {
    username: string;
    email: string;
    password: string;
  }

  export class CreateClientUseCase {
    async execute({ username,password, email}: ICreateUsuario) {
      // validar o usuario existnte
      console.log(username);
      const UserExists = await prisma.usuario.findFirst({
        where: {
            email: {
            equals: email
          },
        },
      });
      if (UserExists) {
        throw new Error("Usuario já existe");
      }
      // criptografar a senha
      const hashPassword = await hash(password, 10);
  
       // salvar o client
      const User = await prisma.usuario.create({
        data: {
          username,
          email,
          password: hashPassword,
        },
      });
      return User;
    }
  }