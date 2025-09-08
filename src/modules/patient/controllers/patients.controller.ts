import { Request, Response } from "express";
import { PatientService } from "../services/patient.service";

export class PatientController {
  constructor(private patientService: PatientService) {}

  // Método helper para processar o body
  private patientParams(req: Request) {
    return {
      ...req.body,
      psychologistId: req.user!.id, // injeta automaticamente
    };
  }

  async create(req: Request, res: Response) {
    try {
      const data = this.patientParams(req);
      const client = await this.patientService.create(data);
      return res.status(201).json(client);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar paciente" });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const clients = await this.patientService.read();
      return res.status(200).json(clients);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar pacientes" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = this.patientParams(req);
      const client = await this.patientService.update(id, data);
      return res.status(201).json(client);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar paciente" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.patientService.delete(id);
      return res.status(200).json({ message: "paciente excluído com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar paciente" });
    }
  }
}
