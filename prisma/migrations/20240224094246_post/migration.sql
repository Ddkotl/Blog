/*
  Warnings:

  - You are about to drop the `Novel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Novel";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
