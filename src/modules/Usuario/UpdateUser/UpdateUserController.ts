import { Request, Response } from "express";
import { UpdateUser } from "./UpdateUser";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const {id,username,email,password} = req.body;
    const updateUser = new UpdateUser();
    const result = await updateUser.execute({
      id,
      username,
      email,
      password,
    });
    return res.json(result);
  }
}