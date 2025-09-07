/*
  Warnings:

  - You are about to drop the `psychologist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."psychologist";

-- CreateTable
CREATE TABLE "public"."psychologists" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "birth" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(20) NOT NULL,
    "rg" VARCHAR(20) NOT NULL,
    "crp" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "specialty" VARCHAR(20),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "psychologists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Patient" (
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

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "psychologists_email_key" ON "public"."psychologists"("email");

-- CreateIndex
CREATE INDEX "Patient_psychologistId_idx" ON "public"."Patient"("psychologistId");

-- AddForeignKey
ALTER TABLE "public"."Patient" ADD CONSTRAINT "Patient_psychologistId_fkey" FOREIGN KEY ("psychologistId") REFERENCES "public"."psychologists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
