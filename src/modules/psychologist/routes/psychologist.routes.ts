import { Router } from "express";
import { PsychologistPrismaRepository,  } from "../repositories/psychologist.prisma.repository";


import { prisma } from "../../../database/prisma.client";
import { PsychologistController } from "../controllers/psychologist.controller";
import { PsychologistService } from "../services/psychologist.service";


export const psychologistsRoutes = Router();

// Instâncias necessárias
const psychologistRepository = new PsychologistPrismaRepository(prisma);
const psychologistService = new PsychologistService( psychologistRepository );
const psychologistController = new PsychologistController(psychologistService );

// Rotas
psychologistsRoutes.post("/psicologos", (req, res) => psychologistController.create(req, res));


export default psychologistsRoutes ;
