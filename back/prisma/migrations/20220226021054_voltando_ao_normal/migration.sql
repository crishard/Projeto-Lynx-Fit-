/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `treino` table. All the data in the column will be lost.
  - Added the required column `nome_usuario` to the `treino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_id_usuario_fkey";

-- AlterTable
ALTER TABLE "treino" DROP COLUMN "id_usuario",
ADD COLUMN     "nome_usuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
