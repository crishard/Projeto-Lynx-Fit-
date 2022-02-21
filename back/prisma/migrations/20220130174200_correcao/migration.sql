/*
  Warnings:

  - You are about to drop the column `id_equipamento` on the `treino` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `treino` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome_equipamento]` on the table `equipamento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome_equipamento` to the `treino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_usuario` to the `treino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_id_equipamento_fkey";

-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_id_usuario_fkey";

-- AlterTable
ALTER TABLE "treino" DROP COLUMN "id_equipamento",
DROP COLUMN "id_usuario",
ADD COLUMN     "nome_equipamento" TEXT NOT NULL,
ADD COLUMN     "nome_usuario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "equipamento_nome_equipamento_key" ON "equipamento"("nome_equipamento");

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_equipamento_fkey" FOREIGN KEY ("nome_equipamento") REFERENCES "equipamento"("nome_equipamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
