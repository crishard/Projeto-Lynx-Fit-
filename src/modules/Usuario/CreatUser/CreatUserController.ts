import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreatUser";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { username,email,password} = req.body;
    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username,
      email,
      password,
    });
    return res.json(result);
  }
}