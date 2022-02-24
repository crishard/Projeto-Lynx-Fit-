import { Request, Response } from "express";
import { Login } from "./Login";

export class LoginController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const login = new Login();
    const resultado = await login.execute({
      email,
      senha,
    });
    if( resultado instanceof Error){
      return res.status(400).json(resultado.message)
    }
    return res.json(resultado);
  }
}