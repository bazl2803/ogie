'use server';
import { prisma } from '@/modules/core/lib/prisma';

export const getProducts = async () =>
	await prisma.product.findMany({});
