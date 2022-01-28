/*
  Warnings:

  - You are about to drop the `equipamentos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_client` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "id_client" TEXT NOT NULL;

-- DropTable
DROP TABLE "equipamentos";

-- CreateTable
CREATE TABLE "equipamento" (
    "id_equipamento" TEXT NOT NULL,
    "nome_equipamento" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,

    CONSTRAINT "equipamento_pkey" PRIMARY KEY ("id_equipamento")
);

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipamento" ADD CONSTRAINT "equipamento_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
