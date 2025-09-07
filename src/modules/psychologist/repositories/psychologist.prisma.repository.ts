import type { PrismaClient } from "../../../../prisma/generated/prisma";

import { IPsychologistRepository } from "./psychologist.repository";
import { PsychologistResponseDTO } from "../dtos/response-psychologist.dto";
import { CreatePsychologistDTO } from "../dtos/create-psychologist.dto";

export class PsychologistPrismaRepository implements IPsychologistRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreatePsychologistDTO): Promise<PsychologistResponseDTO> {
    const psychologist = await this.prisma.psychologist.create({ data });

    return {
      id: psychologist.id,
      name: psychologist.name,
      birth: psychologist.birth,
      email: psychologist.email,
      cpf: psychologist.cpf,
      rg: psychologist.rg,
      crp: psychologist.crp,
      phone: psychologist.phone,
      specialty: psychologist.specialty ?? undefined,
      createdAt: psychologist.createdAt,
      updatedAt: psychologist.updatedAt,
      deletedAt: psychologist.deletedAt,
    };
  }

  async findByEmail(email: string) {
    return this.prisma.psychologist.findUnique({ where: { email } });
  }
}
