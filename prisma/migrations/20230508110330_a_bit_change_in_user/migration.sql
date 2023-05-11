/*
  Warnings:

  - You are about to drop the column `firtName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `firtName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `fullName` VARCHAR(191) NULL;
