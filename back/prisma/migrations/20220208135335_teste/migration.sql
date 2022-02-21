/*
  Warnings:

  - You are about to drop the column `nome_usuario` on the `medidas` table. All the data in the column will be lost.
  - Added the required column `id_usuario` to the `medidas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "medidas" DROP CONSTRAINT "medidas_nome_usuario_fkey";

-- AlterTable
ALTER TABLE "medidas" DROP COLUMN "nome_usuario",
ADD COLUMN     "id_usuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "medidas" ADD CONSTRAINT "medidas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
