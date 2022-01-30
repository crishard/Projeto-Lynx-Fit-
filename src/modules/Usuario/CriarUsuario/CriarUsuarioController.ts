import { Request, Response } from "express";
import { CreateUserCase } from "./CriarUsuario";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username,email,password} = req.body;
    const createUserCase = new CreateUserCase();
    const result = await createUserCase.execute({
      id_client: req.id_client,
      username,
      email,
      password,
      
    });
    return res.json(result);
  }
}