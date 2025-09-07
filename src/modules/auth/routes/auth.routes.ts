import { Router } from "express";
import { AuthPrismaRepository } from "../repositories/auth.prisma.repository";
import { AuthService } from "../services/auth.service";

import { prisma } from "../../../database/prisma.client";
import { AuthController } from "../controllers/auth.controller";

export const authRoutes = Router();

// Instâncias necessárias
const authRepository = new AuthPrismaRepository(prisma);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

authRoutes.post("/login", (req, res) => authController.login(req, res));

export default authRoutes;
