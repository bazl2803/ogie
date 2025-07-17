import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const prismaClientSingleton = () => {
	const adapter = new PrismaNeon({ connectionString: process.env.POSTGRES_PRISMA_URL });
	return new PrismaClient({adapter});
};

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
