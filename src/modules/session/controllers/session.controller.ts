import { Request, Response } from "express";

import { SessionService } from "../services/session.service";
import { createReservationSchema } from "../validations/create-session.schema";
import { validateReservation } from "../validations/validate-session";

export class SessionController {
  constructor(private sessionService: SessionService) {}

  async create(req: Request, res: Response) {
    const isValid = validateReservation(createReservationSchema, req, res);
    if (!isValid) return res;

    try {
      const data = req.body;
      const client = await this.sessionService.create(data);

      return res.status(201).json(client);
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Erro ao criar reserva",
      });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const clients = await this.sessionService.read();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar reservas" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const client = await this.sessionService.update(id, data);

      return res.status(201).json(client);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar reserva" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.sessionService.delete(id);
      return res.status(200).json({ message: "Reserva excluída com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar reserva" });
    }
  }
}
