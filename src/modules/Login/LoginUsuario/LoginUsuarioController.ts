import { Request, Response } from "express";
import { ValidacaoUsuario } from "./LoginUsuario";

export class ValidacaoUsuarioController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const validacaoUsuario = new ValidacaoUsuario();
    const result = await validacaoUsuario.execute({
      email,
      password,
    });
    return res.json(result);
  }
}