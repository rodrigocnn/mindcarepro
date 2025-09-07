import { Router } from "express";
import { patientRoutes } from "../../modules/patient/routes/patient.routes";
import psychologistsRoutes from "../../modules/psychologist/routes/psychologist.routes";

export const router = Router();

router.use(psychologistsRoutes);
router.use(patientRoutes);
