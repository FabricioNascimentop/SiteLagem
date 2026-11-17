import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
const dbUrl = new URL(process.env.DATABASE_URL!);

console.log("DATABASE_URL em uso:", {
  host: dbUrl.hostname,
  port: dbUrl.port,
  username: decodeURIComponent(dbUrl.username),
  database: dbUrl.pathname,
});