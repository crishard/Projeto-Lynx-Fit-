import { compare } from "bcrypt";
import { prisma } from "../../dataBase/prismaCliente";
import { sign } from "jsonwebtoken";

interface ILogin {
    email: string;
    senha: string;
}

export class Login {
    async execute({ senha, email }: ILogin) {
      // Receber email e senha
      //Verificar se o usuario está cadastrado para
      // console.log(senha, email);
      const cliente = await prisma.cliente.findFirst({
        where: { email },
      });

      const usuario = await prisma.usuario.findFirst({
        where: { email },
      });
  
      if (cliente) {
          //verica a senha
        const senhaMatch = await compare(senha, cliente.senha);
        if (!senhaMatch) {
            return new Error("Nome de usuário ou senha invalido");
        }

        const token = sign({ email }, "chavesecretacliente", {
            subject: cliente.id,
            expiresIn: "1d",
        });
        return {token: token, tipo: 1};
      }
      if(usuario){
        //verica a senha
        const senhaMatch = await compare(senha, usuario.senha);
        if (!senhaMatch) {
            return new Error("Nome de usuário ou senha invalido");
        }

        const token = sign({ email }, "chavesecreta", {
            subject: usuario.id,
            expiresIn: "1d",
        });
        return {token: token, tipo: 2};
      }
      if (!usuario && !cliente) {
        return new Error(" email ou senha invalido");
      }
    }
  }