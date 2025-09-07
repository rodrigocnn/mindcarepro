/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Patient" DROP CONSTRAINT "Patient_psychologistId_fkey";

-- DropTable
DROP TABLE "public"."Patient";

-- CreateTable
CREATE TABLE "public"."patients" (
    "id" UUID NOT NULL,
    "psychologistId" UUID NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "phone" VARCHAR(20),
    "birthDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "patients_psychologistId_idx" ON "public"."patients"("psychologistId");

-- AddForeignKey
ALTER TABLE "public"."patients" ADD CONSTRAINT "patients_psychologistId_fkey" FOREIGN KEY ("psychologistId") REFERENCES "public"."psychologists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
