import NeonAdapter from '@auth/neon-adapter';
import { Pool } from '@neondatabase/serverless';
import nextAuth from 'next-auth';
import google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = nextAuth(() => {
	const pool = new Pool({ connectionString: process.env.DATABASE_URL });

	return {
		adapter: NeonAdapter(pool),
		providers: [google],
	};
});
