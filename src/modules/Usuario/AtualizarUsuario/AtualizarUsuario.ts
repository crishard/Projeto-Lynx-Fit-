import {prisma} from "../../../dataBase/prismaCliente";

interface IUpdateUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

export class UpdateUser {
  async execute({ id,username,email,password }: IUpdateUser) {
    if (!id) {
        throw new Error("Id não encontrado");
      }
    
      const todoAlreadyExist = await prisma.usuario.findUnique({ where: { id } });
    
      if (!todoAlreadyExist) {
        throw new Error("Usuario não existe");
      }
    
    const result = await prisma.usuario.update({
        where: {
            id,
          },
          data: {
            username,
            email,
            password
            
          },
        });

        return result;
    }

}
    