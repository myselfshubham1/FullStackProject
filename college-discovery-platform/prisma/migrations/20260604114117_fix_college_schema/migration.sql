/*
  Warnings:

  - You are about to alter the column `placements` on the `College` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[name]` on the table `College` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CollegeType" AS ENUM ('IIT', 'NIT', 'IIIT', 'Medical', 'Law', 'Private', 'University');

-- DropIndex
DROP INDEX "College_city_idx";

-- DropIndex
DROP INDEX "College_name_idx";

-- DropIndex
DROP INDEX "College_rating_idx";

-- AlterTable
ALTER TABLE "College" ADD COLUMN     "type" "CollegeType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "placements" SET DATA TYPE INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");
