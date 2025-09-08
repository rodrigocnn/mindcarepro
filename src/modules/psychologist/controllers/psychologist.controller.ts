import { Request, Response } from "express";

import { PsychologistService } from "../services/psychologist.service";

export class PsychologistController {
  constructor(private psychologistService: PsychologistService) {}

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const psychologist = await this.psychologistService.create(data);
      return res.status(201).json(psychologist);
    } catch (error) {
      console.error(error); // sempre bom logar no servidor
      return res.status(500).json({ message: "Erro ao criar Psicologo" });
    }
  }
}
