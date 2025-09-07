import { Router } from "express";

import { prisma } from "../../../database/prisma.client";
import { SessionPrismaRepository } from "../repositories/session.prisma.repository";

import { authMiddleware } from "../../../shared/middlewares/authMiddleware";
import { SessionService } from "../services/session.service";
import { SessionController } from "../controllers/session.controller";

export const sessionRoutes = Router();

const sessionRepository = new SessionPrismaRepository(prisma);
const sessionService = new SessionService(sessionRepository);
const sessionController = new SessionController(sessionService);

sessionRoutes.post("/sessoes", authMiddleware, (req, res) =>
  sessionController.create(req, res)
);
sessionRoutes.get("/session", authMiddleware, (req, res) =>
  sessionController.read(req, res)
);
sessionRoutes.put("/session/:id", authMiddleware, (req, res) =>
  sessionController.update(req, res)
);

sessionRoutes.delete("/session/:id", authMiddleware, (req, res) =>
  sessionController.delete(req, res)
);
