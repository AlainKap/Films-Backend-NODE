/*
  Warnings:

  - You are about to drop the column `Cree_le` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `Derniere_mise_a_jour` on the `Films` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Films" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "realisateur" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL
);
INSERT INTO "new_Films" ("annee", "id", "nom", "realisateur", "synopsis") SELECT "annee", "id", "nom", "realisateur", "synopsis" FROM "Films";
DROP TABLE "Films";
ALTER TABLE "new_Films" RENAME TO "Films";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
