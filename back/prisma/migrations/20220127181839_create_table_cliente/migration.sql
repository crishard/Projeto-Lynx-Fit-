/*
  Warnings:

  - You are about to drop the `Treino` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Treino";

-- CreateTable
CREATE TABLE "treino" (
    "id" TEXT NOT NULL,
    "dia" INTEGER NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "equipamento" TEXT NOT NULL,
    "treino" TEXT NOT NULL,

    CONSTRAINT "treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "treino_dia_key" ON "treino"("dia");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cnpj_key" ON "Cliente"("cnpj");

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
