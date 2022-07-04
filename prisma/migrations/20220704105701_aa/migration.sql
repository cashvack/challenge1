-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('greenvegetables', 'fruits', 'dairy');

-- CreateTable
CREATE TABLE "Pricing" (
    "id" SERIAL NOT NULL,
    "productCategory" "CategoryType" NOT NULL,
    "productName" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "marketDataFeeds" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "supply" INTEGER NOT NULL,
    "demand" INTEGER NOT NULL,
    "perishable" BOOLEAN NOT NULL,
    "inventory" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);
