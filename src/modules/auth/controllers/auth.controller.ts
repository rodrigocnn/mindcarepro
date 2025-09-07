import { Request, Response } from "express";

import { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(private userService: AuthService) {}

  async login(req: Request, res: Response) {
    try {
      const data = req.body;
      const loggedUser = await this.userService.login(data);
      return res.status(200).json(loggedUser);
    } catch (error) {
      return res.status(401).json({ message: "Email ou senha inválidos" });
    }
  }
}
