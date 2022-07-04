/*
  Warnings:

  - Added the required column `MinimumQuantity` to the `Usage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usage" ADD COLUMN     "MinimumQuantity" INTEGER NOT NULL;
