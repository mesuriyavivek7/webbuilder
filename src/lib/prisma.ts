import "dotenv/config";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaMariaDb } from '@prisma/adapter-mariadb'


const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5
})

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV!=="production") globalForPrisma.prisma = prisma

export default prisma