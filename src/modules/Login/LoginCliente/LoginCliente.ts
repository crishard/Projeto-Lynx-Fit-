import { compare } from "bcrypt";
import { prisma } from "../../../dataBase/prismaCliente";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  email: string;
  senha: string;
}

export class ValidacaoCliente {
  async execute({ senha, email }: IAuthenticateClient) {
    // Receber email e senha
    //Verificar se o usuario está cadastrado para
    console.log(senha, email);
    const client = await prisma.cliente.findFirst({
      where: { email },
    });

    if (!client) {
      throw new Error(" email ou senha invalido");
    }

    // Verificar se a senha corresponde ao emails
    const senhaMatch = await compare(senha, client.senha);

    if (!senhaMatch) {
      throw new Error("sername ou senha invalido");
    }
    // Gerar token
    const token = sign({ email }, "chavesecretaclient", {
      subject: client.id,
      expiresIn: "1d",
    });
    return token;
  }
}