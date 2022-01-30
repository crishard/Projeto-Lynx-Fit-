import { Request, Response } from "express";
import { DeleteUser } from "./DeletarUsuario";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
      const { id} = req.params;
      const deleteUser = new DeleteUser();
      const result = await deleteUser.execute({
        id
      });
      return res.json(result);
    }
  }