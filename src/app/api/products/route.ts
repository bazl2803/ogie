import prisma from '@/modules/core/lib/prisma-client';

export async function GET() {
	const data = await prisma.product.findMany({});

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}