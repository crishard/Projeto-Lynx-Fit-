/*
  Warnings:

  - A unique constraint covering the columns `[nome_usuario]` on the table `treino` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "treino_nome_usuario_key" ON "treino"("nome_usuario");
