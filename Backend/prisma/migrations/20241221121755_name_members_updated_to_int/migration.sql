/*
  Warnings:

  - Changed the type of `members` on the `Club` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "members",
ADD COLUMN     "members" INTEGER NOT NULL;
