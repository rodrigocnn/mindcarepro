import type { PrismaClient } from "../../../../prisma/generated/prisma";

import { CreateSessionDTO } from "../dtos/create-session.dto";
import { ResponseSessionDTO } from "../dtos/response-session.dto";
import { ISessionRepository } from "./session.repository";

export class SessionPrismaRepository implements ISessionRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateSessionDTO) {
    return this.prisma.session.create({ data });
  }

  async read(): Promise<ResponseSessionDTO[]> {
    const clients = await this.prisma.session.findMany();
    return clients;
  }

  async update(
    id: string,
    data: CreateSessionDTO
  ): Promise<ResponseSessionDTO | null> {
    return await this.prisma.session.update({
      where: { id },
      data,
    });
  }

  async show(id: string): Promise<ResponseSessionDTO | null> {
    return await this.prisma.session.findFirst({ where: { id: id } });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.session.delete({ where: { id } });
  }

  async exists(id: string): Promise<boolean> {
    const result = await this.prisma.session.findUnique({
      where: { id },
    });

    return result !== null;
  }
}
