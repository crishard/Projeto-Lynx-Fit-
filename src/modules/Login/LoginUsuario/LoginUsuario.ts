import { compare } from "bcrypt";
import { prisma } from "../../../dataBase/prismaCliente";
import { sign } from "jsonwebtoken";

interface ILoginUsuario {
  email: string;
  senha: string;
}

export class LoginUsuario {
  async execute({ senha, email }: ILoginUsuario) {
    // Receber email e senha
    //Verificar se o usuario está cadastrado para
    console.log(senha, email);
    const usuario = await prisma.usuario.findFirst({
      where: { email },
    });

    if (!usuario) {
      return new Error(" email ou senha invalido");
    }

    // Verificar se a senha corresponde ao emails
    const passwordMatch = await compare(senha, usuario.senha);

    if (!passwordMatch) {
      return new Error("username ou password invalido");
    }
    // Gerar token
    const token = sign({ email }, "chavesecreta", {
      subject: usuario.id,
      expiresIn: "1d",
    });
    return token;
  }
}