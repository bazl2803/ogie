'use server';
import { prisma } from '@/core/lib/prisma';

export const getProducts = async () =>
	await prisma.product.findMany({});
