-- CreateTable
CREATE TABLE "Films" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "realisateur" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "timestamps" DATETIME NOT NULL
);
