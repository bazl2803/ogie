import prisma from '@/modules/core/lib/prisma-client';

export async function GET() {
	const categories = await prisma.category.findMany();

	return new Response(JSON.stringify(categories), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export async function POST(req: Request) {
	const body = await req.json();
	const { name } = body;

	const category = await prisma.category.create({
		data: {
			name,
		},
	});

	return (
		new Response(JSON.stringify(category)),
		{
			status: 201,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
}
