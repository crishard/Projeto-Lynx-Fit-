/*
  Warnings:

  - Changed the type of `torax` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `busto` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cintura` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quadril` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peso` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `altura` on the `medidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "medidas" DROP COLUMN "torax",
ADD COLUMN     "torax" DECIMAL(65,30) NOT NULL,
DROP COLUMN "busto",
ADD COLUMN     "busto" DECIMAL(65,30) NOT NULL,
DROP COLUMN "cintura",
ADD COLUMN     "cintura" DECIMAL(65,30) NOT NULL,
DROP COLUMN "quadril",
ADD COLUMN     "quadril" DECIMAL(65,30) NOT NULL,
DROP COLUMN "peso",
ADD COLUMN     "peso" DECIMAL(65,30) NOT NULL,
DROP COLUMN "altura",
ADD COLUMN     "altura" DECIMAL(65,30) NOT NULL;
