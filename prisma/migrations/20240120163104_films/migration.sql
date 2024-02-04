/*
  Warnings:

  - You are about to drop the column `timestamps` on the `Films` table. All the data in the column will be lost.
  - Added the required column `Cree_le` to the `Films` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Derniere_mise_a_jour` to the `Films` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Films" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "realisateur" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "Cree_le" DATETIME NOT NULL,
    "Derniere_mise_a_jour" DATETIME NOT NULL
);
INSERT INTO "new_Films" ("annee", "id", "nom", "realisateur", "synopsis") SELECT "annee", "id", "nom", "realisateur", "synopsis" FROM "Films";
DROP TABLE "Films";
ALTER TABLE "new_Films" RENAME TO "Films";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
