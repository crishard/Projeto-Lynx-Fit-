/*
  Warnings:

  - Added the required column `nome_usuario` to the `medidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medidas" ADD COLUMN     "nome_usuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "medidas" ADD CONSTRAINT "medidas_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
