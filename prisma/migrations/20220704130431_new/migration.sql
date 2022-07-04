/*
  Warnings:

  - You are about to drop the column `marketDataFeeds` on the `Pricing` table. All the data in the column will be lost.
  - Added the required column `location` to the `Pricing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retailPrice` to the `Pricing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wholesalePrice` to the `Pricing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pricing" DROP COLUMN "marketDataFeeds",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "optimalPrice" INTEGER,
ADD COLUMN     "retailPrice" INTEGER NOT NULL,
ADD COLUMN     "wholesalePrice" INTEGER NOT NULL;
