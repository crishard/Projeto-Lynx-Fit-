-- CreateTable
CREATE TABLE "Treino" (
    "id" TEXT NOT NULL,
    "dia" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "equipamento" TEXT NOT NULL,
    "treino" TEXT NOT NULL,

    CONSTRAINT "Treino_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Treino_dia_key" ON "Treino"("dia");
