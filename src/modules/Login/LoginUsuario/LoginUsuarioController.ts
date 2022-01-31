import { Request, Response } from "express";
import { LoginUsuario } from "./LoginUsuario";

export class LoginUsuarioController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const loginUsuario = new LoginUsuario();
    const result = await loginUsuario.execute({
      email,
      senha,
    });
    return res.json(result);
  }
}