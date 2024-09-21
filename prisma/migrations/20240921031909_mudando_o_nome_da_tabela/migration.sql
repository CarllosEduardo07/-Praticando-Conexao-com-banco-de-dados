/*
  Warnings:

  - You are about to drop the `Amigos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Amigos`;

-- CreateTable
CREATE TABLE `amigos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
