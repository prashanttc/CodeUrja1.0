import { PrismaClient } from "@prisma/client";

// Add prisma to the NodeJS global type
interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = db;
}

export default db;
