import {prisma} from "../../../dataBase/prismaUsuario";

interface IUpdateUser {
  id: String;
  username: String;
  email: String;
  password: String;
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
    