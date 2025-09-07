-- CreateEnum
CREATE TYPE "public"."SessionStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" UUID NOT NULL,
    "psychologistId" UUID NOT NULL,
    "patientId" UUID NOT NULL,
    "sessionDate" TIMESTAMP(3) NOT NULL,
    "summary" TEXT,
    "behavioralObservations" TEXT,
    "interventions" TEXT,
    "patientReactions" TEXT,
    "referrals" TEXT,
    "therapeuticPlans" TEXT,
    "diagnosticHypotheses" TEXT,
    "techniqueUsed" VARCHAR(255),
    "status" "public"."SessionStatus" NOT NULL DEFAULT 'SCHEDULED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sessions_psychologistId_idx" ON "public"."sessions"("psychologistId");

-- CreateIndex
CREATE INDEX "sessions_patientId_idx" ON "public"."sessions"("patientId");

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_psychologistId_fkey" FOREIGN KEY ("psychologistId") REFERENCES "public"."psychologists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
