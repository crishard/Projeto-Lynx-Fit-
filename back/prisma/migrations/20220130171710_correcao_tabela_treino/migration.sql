/*
  Warnings:

  - You are about to drop the column `id_cliente` on the `treino` table. All the data in the column will be lost.
  - You are about to drop the column `nome_equipamento` on the `treino` table. All the data in the column will be lost.
  - Added the required column `id_client` to the `treino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_equipamento` to the `treino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_nome_equipamento_fkey";

-- DropIndex
DROP INDEX "equipamento_nome_equipamento_key";

-- AlterTable
ALTER TABLE "treino" DROP COLUMN "id_cliente",
DROP COLUMN "nome_equipamento",
ADD COLUMN     "id_client" TEXT NOT NULL,
ADD COLUMN     "id_equipamento" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_id_equipamento_fkey" FOREIGN KEY ("id_equipamento") REFERENCES "equipamento"("id_equipamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
