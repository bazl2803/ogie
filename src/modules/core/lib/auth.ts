import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/modules/core/lib/prisma';
import google from 'next-auth/providers/google';

export const { handlers, auth, signIn, signOut } = NextAuth({
	theme: { logo: '/logo-alt.svg', colorScheme: 'light', brandColor: '#000000' },
	providers: [
		google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	adapter: PrismaAdapter(prisma),
	secret: process.env.AUTH_SECRET,
	session: { strategy: 'jwt' },
});
