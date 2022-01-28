import { compare } from "bcrypt";
import { prisma } from "../../../dataBase/prismaUsuario";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class ValidacaoUsuario {
  async execute({ password, email }: IAuthenticateUser) {
    // Receber email e senha
    //Verificar se o usuario está cadastrado para
    console.log(password, email);
    const user = await prisma.usuario.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error(" email ou password invalido");
    }

    // Verificar se a senha corresponde ao emails
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("username ou password invalido");
    }
    // Gerar token
    const token = sign({ email }, "chavesecreta", {
      subject: user.id,
      expiresIn: "1d",
    });
    return token;
  }
}