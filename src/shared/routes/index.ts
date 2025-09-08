import { Router } from "express";
import { patientRoutes } from "../../modules/patient/routes/patient.routes";
import psychologistsRoutes from "../../modules/psychologist/routes/psychologist.routes";
import authRoutes from "../../modules/auth/routes/auth.routes";

export const router = Router();

router.use(authRoutes);
router.use(psychologistsRoutes);
router.use(patientRoutes);
