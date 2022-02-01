/*
  Warnings:

  - You are about to drop the column `password` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_nome_usuario_fkey";

-- DropIndex
DROP INDEX "usuario_username_key";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "usuario_nome_key" ON "usuario"("nome");

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
