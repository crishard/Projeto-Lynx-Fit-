/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `medidas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "medidas" DROP CONSTRAINT "medidas_id_usuario_fkey";

-- AlterTable
ALTER TABLE "medidas" DROP COLUMN "id_usuario";
