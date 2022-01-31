/*
  Warnings:

  - You are about to drop the column `equipamento` on the `treino` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `treino` table. All the data in the column will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome_equipamento]` on the table `equipamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_cliente` to the `treino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_equipamento` to the `treino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_usuario` to the `treino` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "equipamento" DROP CONSTRAINT "equipamento_id_client_fkey";

-- DropForeignKey
ALTER TABLE "treino" DROP CONSTRAINT "treino_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_id_client_fkey";

-- AlterTable
ALTER TABLE "treino" DROP COLUMN "equipamento",
DROP COLUMN "id_usuario",
ADD COLUMN     "id_cliente" TEXT NOT NULL,
ADD COLUMN     "nome_equipamento" TEXT NOT NULL,
ADD COLUMN     "nome_usuario" TEXT NOT NULL;

-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_email_key" ON "cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cnpj_key" ON "cliente"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "equipamento_nome_equipamento_key" ON "equipamento"("nome_equipamento");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipamento" ADD CONSTRAINT "equipamento_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_equipamento_fkey" FOREIGN KEY ("nome_equipamento") REFERENCES "equipamento"("nome_equipamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treino" ADD CONSTRAINT "treino_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
