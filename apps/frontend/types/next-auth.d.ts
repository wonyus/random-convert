import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		tokens: any
		role: string	
	}

	interface User {
		id: string
		username: string
		email: string
		role: string
		tokens: any & DefaultSession['user']
	}

	interface Account {}

	interface Profile {}
}
