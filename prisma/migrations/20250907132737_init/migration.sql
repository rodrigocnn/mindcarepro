-- CreateTable
CREATE TABLE "public"."Psicologo" (
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

    CONSTRAINT "Psicologo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Psicologo_email_key" ON "public"."Psicologo"("email");
