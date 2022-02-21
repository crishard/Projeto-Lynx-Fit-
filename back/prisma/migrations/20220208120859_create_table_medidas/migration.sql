-- CreateTable
CREATE TABLE "medidas" (
    "id" TEXT NOT NULL,
    "torax" TEXT NOT NULL,
    "busto" TEXT NOT NULL,
    "cintura" TEXT NOT NULL,
    "quadril" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "p_gordura" TEXT NOT NULL,
    "nome_usuario" TEXT NOT NULL,

    CONSTRAINT "medidas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "medidas" ADD CONSTRAINT "medidas_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "usuario"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
