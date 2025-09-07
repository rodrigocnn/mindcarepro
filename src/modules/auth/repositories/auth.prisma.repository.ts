import type { PrismaClient } from "../../../../prisma/generated/prisma";

import { IAuthRepository } from "./auth.repository";

export class AuthPrismaRepository implements IAuthRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string) {
    return this.prisma.psychologist.findUnique({ where: { email } });
  }

  async exists(id: string): Promise<boolean> {
    const result = await this.prisma.psychologist.findUnique({
      where: { id },
    });

    return result !== null;
  }
}
