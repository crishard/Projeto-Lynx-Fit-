import { Request, Response } from "express";
import { FindUser } from "./FindUser";

export class FindUserController {
  async handle(req: Request, res: Response) {
    const findUser = new FindUser();

    const result = await findUser.execute();

    return res.json(result);
  }
}