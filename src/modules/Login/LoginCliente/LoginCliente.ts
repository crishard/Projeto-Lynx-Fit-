import { compare } from "bcrypt";
import { prisma } from "../../../dataBase/prismaCliente";
import { sign } from "jsonwebtoken";

interface ILoginCliente {
  email: string;
  senha: string;
}

export class LoginCliente {
  async execute({ senha, email }: ILoginCliente) {
    // Receber email e senha
    //Verificar se o usuario está cadastrado para
    console.log(senha, email);
    const cliente = await prisma.cliente.findFirst({
      where: { email },
    });

    if (!cliente) {
      throw new Error(" email ou senha invalido");
    }

    // Verificar se a senha corresponde ao emails
    const senhaMatch = await compare(senha, cliente.senha);

    if (!senhaMatch) {
      throw new Error("sername ou senha invalido");
    }
    // Gerar token
    const token = sign({ email }, "chavesecretaclient", {
      subject: cliente.id,
      expiresIn: "1d",
    });
    return token;
  }
}