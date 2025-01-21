import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateUserRequest = {
  username: string;
  password: string;
};

export async function POST(request: Request) {
  const body: CreateUserRequest = await request.json();
  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return new Response(JSON.stringify(user), { status: 201 });
}
